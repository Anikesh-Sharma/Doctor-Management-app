"use client";

import React, {
  useState,
  useEffect,
  useReducer,
  createContext,
  useContext,
} from "react";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  Award,
  Users,
  Star,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Filter,
  Search,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import doctorsData from "../data.json";

// ======================================================================
// For testing: simulate a particular day for "Available Today" check.
// Comment out or remove the following line in production to use the actual current day.
const TEST_DATE = new Date("2025-03-10"); // Monday
// ======================================================================

// Create context for doctors data
const DoctorsContext = createContext();

// Action types
const ACTIONS = {
  INITIALIZE: "initialize",
  FILTER_DOCTORS: "filter_doctors",
  SET_SEARCH: "set_search",
  SET_SPECIALTY: "set_specialty",
  SET_TODAY_ONLY: "set_today_only",
  SET_PAGE: "set_page",
  ADD_APPOINTMENT: "add_appointment",
};

// Helper function: check if doctor is available "today" (TEST_DATE or current date)
const isAvailableToday = (
  availabilityArray,
  testDate = TEST_DATE || new Date()
) => {
  if (!availabilityArray || !Array.isArray(availabilityArray) || availabilityArray.length === 0) {
    return false;
  }

  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const today = days[testDate.getDay()];
  const dayMapping = {
    sunday: ["sunday", "sun"],
    monday: ["monday", "mon"],
    tuesday: ["tuesday", "tue", "tues"],
    wednesday: ["wednesday", "wed"],
    thursday: ["thursday", "thu", "thurs"],
    friday: ["friday", "fri"],
    saturday: ["saturday", "sat"],
  };

  return availabilityArray.some((slot) => {
    if (!slot.day) return false;
    const slotDay = slot.day.toLowerCase();
    return dayMapping[today].includes(slotDay);
  });
};

const getAvailabilityText = (availability) => {
  if (!availability || !Array.isArray(availability) || availability.length === 0) {
    return "No availability information";
  }
  return availability
    .map((slot) => `${slot.day}s: ${slot.startTime}-${slot.endTime}`)
    .join(", ");
};

// ========================
// AppointmentModal
// ========================
const AppointmentModal = ({ doctor, isOpen, onClose }) => {
  // For testing, we initialize date to TEST_DATE; in production, you might default to new Date().
  const [date, setDate] = useState(TEST_DATE || new Date());
  const [time, setTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    description: "", // We'll store this in `notes`
  });

  // Use the DoctorsContext to add new appointments
  const { addAppointment } = useDoctors();

  // Convert a 24-hour time (e.g. "14:30") to "2:30 PM"
  const convertTimeToAmPm = (time24) => {
    if (!time24) return "";
    const [hourStr, minuteStr] = time24.split(":");
    let hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);
    const suffix = hour >= 12 ? "PM" : "AM";
    if (hour > 12) hour -= 12;
    if (hour === 0) hour = 12;
    return `${hour}:${minute.toString().padStart(2, "0")} ${suffix}`;
  };

  // Build available time slots from the doctor's schedule for the selected date
  const getAvailableTimeSlots = () => {
    if (!doctor || !doctor.availability) return [];
    const days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    const dayLower = days[date.getDay()];
    const availableSlot = doctor.availability.find(
      (slot) => slot.day && slot.day.toLowerCase() === dayLower
    );
    if (!availableSlot) return [];

    // Create half-hour increments
    const slots = [];
    const [startHour, startMinute] = availableSlot.startTime.split(":").map(Number);
    const [endHour, endMinute] = availableSlot.endTime.split(":").map(Number);

    let currentHour = startHour;
    let currentMinute = startMinute;
    while (currentHour < endHour || (currentHour === endHour && currentMinute < endMinute)) {
      const hh = currentHour.toString().padStart(2, "0");
      const mm = currentMinute.toString().padStart(2, "0");
      slots.push(`${hh}:${mm}`);
      currentMinute += 30;
      if (currentMinute >= 60) {
        currentHour += 1;
        currentMinute = 0;
      }
    }
    return slots;
  };

  // Handle input changes for name/email/contact/description
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit the appointment
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.contact || !date || !time) {
      alert("Please fill all required fields (Name, Email, Contact, Date, Time).");
      return;
    }
    // Convert the selected half-hour slot to AM/PM
    const timeAmPm = convertTimeToAmPm(time);
    // Format date as yyyy-MM-dd for your Dashboard to parse
    const formattedDate = format(date, "yyyy-MM-dd");

    // Create a random title so it matches your "Consultation with Dr. X" pattern
    const randomTitles = ["Consultation", "Follow-up Appointment"];
    const randomTitle = randomTitles[Math.floor(Math.random() * randomTitles.length)];

    // Build the final appointment object
    const newAppointment = {
      id: Date.now(),
      title: `${randomTitle} with Dr. ${doctor?.name || "Unknown"}`,
      doctorName: doctor?.name || "Unknown",
      appointmentDate: formattedDate, // e.g. "2025-03-10"
      time: timeAmPm,                  // e.g. "2:30 PM"
      patientName: formData.name,
      email: formData.email,
      contact: formData.contact,
      notes: formData.description,     // We'll display this in the Dashboard
      status: "pending",
      doctorId: doctor.id,            // If you want to filter by doctor ID later
    };

    console.log("Appointment booked:", newAppointment);

    // 1. Update context so the doctor has the new appointment
    addAppointment(doctor.id, newAppointment);

    // 2. Also store in localStorage so the Dashboard sees it
    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    storedAppointments.push(newAppointment);
    localStorage.setItem("appointments", JSON.stringify(storedAppointments));

    // Reset form and close
    onClose();
    setFormData({ name: "", email: "", contact: "", description: "" });
    setDate(TEST_DATE || new Date());
    setTime("");
  };

  const availableTimeSlots = getAvailableTimeSlots();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-blue-600" />
            Book Appointment
          </DialogTitle>
          <DialogDescription>
            {doctor ? (
              <>
                <span className="block mt-2 font-medium text-gray-700">
                  Dr. {doctor.name}
                </span>
                <span className="block text-gray-500 text-sm">
                  {doctor.specialization}
                </span>
              </>
            ) : (
              <span className="block mt-2 text-gray-500">
                Complete the form to book your appointment
              </span>
            )}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            {/* NAME */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                <User className="h-4 w-4 text-gray-500 inline mr-1" />
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="col-span-3"
                required
              />
            </div>
            {/* EMAIL */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                <Mail className="h-4 w-4 text-gray-500 inline mr-1" />
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                className="col-span-3"
                required
              />
            </div>
            {/* CONTACT */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="contact" className="text-right">
                <Phone className="h-4 w-4 text-gray-500 inline mr-1" />
                Contact
              </Label>
              <Input
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                placeholder="(123) 456-7890"
                className="col-span-3"
                required
              />
            </div>
            {/* DATE */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">
                <Calendar className="h-4 w-4 text-gray-500 inline mr-1" />
                Date
              </Label>
              <div className="col-span-3">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-gray-500"
                      )}
                    >
                      {date ? format(date, "PPP") : <span>Select date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(thisDate) => {
                        // Prevent booking in the past
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        return thisDate < today;
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            {/* TIME SLOTS */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">
                <Clock className="h-4 w-4 text-gray-500 inline mr-1" />
                Time
              </Label>
              <div className="col-span-3">
                <div className="flex flex-wrap gap-2">
                  {availableTimeSlots.length > 0 ? (
                    availableTimeSlots.map((slot) => (
                      <Button
                        key={slot}
                        type="button"
                        variant={time === slot ? "default" : "outline"}
                        className={cn(
                          "px-3 py-1 h-auto text-sm",
                          time === slot ? "bg-blue-600 text-white" : "hover:bg-blue-50"
                        )}
                        onClick={() => setTime(slot)}
                      >
                        {slot}
                      </Button>
                    ))
                  ) : (
                    <span className="text-sm text-gray-500">
                      No available slots for the selected date
                    </span>
                  )}
                </div>
              </div>
            </div>
            {/* NOTES (description) */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                <MessageSquare className="h-4 w-4 text-gray-500 inline mr-1" />
                Notes
              </Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe your symptoms or reason for visit"
                className="col-span-3"
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
              Confirm Booking
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// ========================
// DoctorCard Component
// ========================
const DoctorCard = ({ doctor }) => {
  const [imageError, setImageError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Check availability for the "Available Today" badge
  const isAvailable = isAvailableToday(doctor.availability);

  // If there's no doctor.image, generate a placeholder
  const placeholderUrl = `/api/placeholder/${
    300 + (doctor.id % 5) * 20
  }/${400 + (doctor.id % 3) * 20}`;

  const experienceText =
    doctor.experience === 1
      ? "1 year experience"
      : `${doctor.experience} years experience`;

  // Count how many appointments have been booked for this doctor
  const appointmentCount = doctor.appointments ? doctor.appointments.length : 0;

  // Check if user is logged in from localStorage
  const handleBookAppointment = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setShowModal(true);
    } else {
      alert("Please login first to book an appointment");
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:shadow-lg hover:translate-y-1 flex flex-col h-full">
        <div className="relative">
          <img
            src={imageError ? placeholderUrl : doctor.image || placeholderUrl}
            alt={`Dr. ${doctor.name}`}
            className="w-full h-64 object-cover object-center"
            onError={() => setImageError(true)}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {isAvailable && (
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                Available Today
              </span>
            )}
            {doctor.experience > 15 && (
              <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                <Award className="w-3 h-3 mr-1" />
                Senior Expert
              </span>
            )}
          </div>

          <div className="absolute bottom-3 left-3">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">
              {doctor.specialization}
            </span>
          </div>
        </div>

        <div className="p-5 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-3">
            <h2 className="text-xl font-bold text-gray-800">{doctor.name}</h2>
            <div className="flex items-center bg-yellow-50 px-2 py-1 rounded">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm font-medium">
                {(4 + ((doctor.id * 0.1) % 1)).toFixed(1)}
              </span>
            </div>
          </div>

          <div className="flex items-start mb-3">
            <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
            <p className="text-gray-600 text-sm ml-2">{doctor.clinicAddress}</p>
          </div>

          <div className="flex items-center text-gray-500 text-sm mb-4">
            <Clock className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="truncate">{getAvailabilityText(doctor.availability)}</span>
          </div>

          <div className="flex items-center space-x-3 mb-4 mt-auto">
            <div className="flex items-center px-3 py-1 bg-gray-100 rounded-full">
              <span className="text-gray-700 text-sm font-medium">
                {experienceText}
              </span>
            </div>
            {appointmentCount > 0 && (
              <div className="flex items-center px-3 py-1 bg-gray-100 rounded-full">
                <Users className="w-4 h-4 mr-1 text-gray-600" />
                <span className="text-gray-700 text-sm font-medium">
                  {appointmentCount} patients
                </span>
              </div>
            )}
          </div>

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md font-medium transition-colors flex items-center justify-center w-full"
            onClick={handleBookAppointment}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Book Appointment
          </button>
        </div>
      </div>

      {/* Appointment Modal: opens if user is logged in */}
      <AppointmentModal
        doctor={doctor}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

// ========================
// Provider & Hook
// ========================
const DoctorsProvider = ({ children }) => {
  const initialState = {
    allDoctors: [],
    filteredDoctors: [],
    specialties: ["All"],
    searchTerm: "",
    selectedSpecialty: "All",
    todayOnly: false,
    currentPage: 1,
    doctorsPerPage: 9,
    totalPages: 0,
  };

  const [state, dispatch] = useReducer(doctorsReducer, initialState);

  function doctorsReducer(state, action) {
    switch (action.type) {
      case ACTIONS.INITIALIZE:
        return {
          ...state,
          allDoctors: action.payload,
          filteredDoctors: action.payload,
          specialties: [
            "All",
            ...new Set(action.payload.map((doc) => doc.specialization)),
          ],
        };
      case ACTIONS.FILTER_DOCTORS:
        const filteredDocs = state.allDoctors.filter((doc) => {
          const matchesSearch =
            doc.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
            doc.specialization
              .toLowerCase()
              .includes(state.searchTerm.toLowerCase());
          const matchesSpecialty =
            state.selectedSpecialty === "All" ||
            doc.specialization === state.selectedSpecialty;
          const matchesAvailability =
            !state.todayOnly || isAvailableToday(doc.availability);
          return matchesSearch && matchesSpecialty && matchesAvailability;
        });
        return {
          ...state,
          filteredDoctors: filteredDocs,
          currentPage: 1,
          totalPages: Math.ceil(filteredDocs.length / state.doctorsPerPage),
        };
      case ACTIONS.SET_SEARCH:
        return { ...state, searchTerm: action.payload };
      case ACTIONS.SET_SPECIALTY:
        return { ...state, selectedSpecialty: action.payload };
      case ACTIONS.SET_TODAY_ONLY:
        return { ...state, todayOnly: action.payload };
      case ACTIONS.SET_PAGE:
        return { ...state, currentPage: action.payload };
      case ACTIONS.ADD_APPOINTMENT:
        const { doctorId, appointment } = action.payload;
        const updateAppointments = (docs) =>
          docs.map((d) => {
            if (d.id === doctorId) {
              return {
                ...d,
                appointments: d.appointments
                  ? [...d.appointments, appointment]
                  : [appointment],
              };
            }
            return d;
          });
        return {
          ...state,
          allDoctors: updateAppointments(state.allDoctors),
          filteredDoctors: updateAppointments(state.filteredDoctors),
        };
      default:
        return state;
    }
  }

  // Initialize from data.json
  useEffect(() => {
    dispatch({ type: ACTIONS.INITIALIZE, payload: doctorsData.doctors });
    dispatch({ type: ACTIONS.FILTER_DOCTORS });
  }, []);

  // Re-filter when search, specialty, or "today only" changes
  useEffect(() => {
    dispatch({ type: ACTIONS.FILTER_DOCTORS });
  }, [state.searchTerm, state.selectedSpecialty, state.todayOnly]);

  // Expose actions
  const setSearchTerm = (term) => dispatch({ type: ACTIONS.SET_SEARCH, payload: term });
  const setSelectedSpecialty = (specialty) =>
    dispatch({ type: ACTIONS.SET_SPECIALTY, payload: specialty });
  const setTodayOnly = (value) =>
    dispatch({ type: ACTIONS.SET_TODAY_ONLY, payload: value });
  const setCurrentPage = (page) => dispatch({ type: ACTIONS.SET_PAGE, payload: page });
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedSpecialty("All");
    setTodayOnly(false);
  };
  const addAppointment = (doctorId, appointment) =>
    dispatch({ type: ACTIONS.ADD_APPOINTMENT, payload: { doctorId, appointment } });

  const indexOfLastDoctor = state.currentPage * state.doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - state.doctorsPerPage;
  const currentDoctors = state.filteredDoctors.slice(
    indexOfFirstDoctor,
    indexOfLastDoctor
  );

  const value = {
    ...state,
    currentDoctors,
    indexOfFirstDoctor,
    indexOfLastDoctor,
    setSearchTerm,
    setSelectedSpecialty,
    setTodayOnly,
    setCurrentPage,
    resetFilters,
    addAppointment,
  };

  return (
    <DoctorsContext.Provider value={value}>{children}</DoctorsContext.Provider>
  );
};

const useDoctors = () => {
  const context = useContext(DoctorsContext);
  if (context === undefined) {
    throw new Error("useDoctors must be used within a DoctorsProvider");
  }
  return context;
};

// ========================
// SearchFilters Component
// ========================
const SearchFilters = () => {
  const {
    searchTerm,
    selectedSpecialty,
    todayOnly,
    specialties,
    setSearchTerm,
    setSelectedSpecialty,
    setTodayOnly,
  } = useDoctors();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by name or specialty..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="relative w-full md:w-64">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Filter className="w-5 h-5 text-gray-400" />
          </div>
          <select
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
          >
            {specialties.map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="availableToday"
            className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            checked={todayOnly}
            onChange={() => setTodayOnly(!todayOnly)}
          />
          <label htmlFor="availableToday" className="text-sm text-gray-700">
            Available Today
          </label>
        </div>
      </div>
    </div>
  );
};

// ========================
// ResultsDisplay Component
// ========================
const ResultsDisplay = () => {
  const {
    currentDoctors,
    filteredDoctors,
    indexOfFirstDoctor,
    indexOfLastDoctor,
    resetFilters,
  } = useDoctors();

  const totalDoctors = filteredDoctors.length;

  if (totalDoctors === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <p className="text-gray-600 mb-4">No doctors match your search criteria</p>
        <button
          className="text-blue-600 font-medium hover:text-blue-800"
          onClick={resetFilters}
        >
          Clear all filters
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="mb-4 text-gray-600 flex items-center">
        <span className="font-medium mr-2">Results:</span>
        Showing {totalDoctors > 0 ? Math.min(totalDoctors, indexOfFirstDoctor + 1) : 0}-
        {Math.min(indexOfLastDoctor, totalDoctors)} of {totalDoctors} doctors
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </>
  );
};

// ========================
// Pagination Component
// ========================
const Pagination = () => {
  const { currentPage, totalPages, filteredDoctors, setCurrentPage } = useDoctors();
  const totalDoctors = filteredDoctors.length;

  if (totalDoctors === 0) {
    return null;
  }

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex justify-between items-center mt-12 bg-white p-4 rounded-lg shadow-sm">
      <span className="text-sm text-gray-600 font-medium">
        Page {currentPage} of {totalPages}
      </span>
      <div className="flex space-x-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="hidden md:flex space-x-1">
          {[...Array(Math.min(5, totalPages))].map((_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-10 h-10 rounded-md ${
                  currentPage === pageNum
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

// ========================
// Main Doctors Page Component
// ========================
const DoctorsPage = () => {
  return (
    <DoctorsProvider>
      <div className="bg-gray-50 min-h-screen">
        <div className="container max-w-[1400px] mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Find Your Doctor</h1>
          <p className="text-gray-600 mb-8">
            Book appointments with the best doctors in your area
          </p>
          <SearchFilters />
          <ResultsDisplay />
          <Pagination />
        </div>
      </div>
    </DoctorsProvider>
  );
};

export { DoctorCard, AppointmentModal, DoctorsPage, DoctorsProvider };
export default DoctorsPage;
