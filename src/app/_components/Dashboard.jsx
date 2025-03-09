"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Clock,
  Calendar as CalendarIcon,
  User,
  Plus,
  Edit,
  X,
  Check,
  Archive,
  MessageSquare, // <-- ADDED for showing notes icon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import dynamic from "next/dynamic";

// (NEW) New Appointment Modal component
function NewAppointmentModal({ isOpen, onClose, onAppointmentCreated }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [doctorName, setDoctorName] = useState("");

  const randomTitles = [
    "Consultation with ",
    "Follow-up Appointment",
    "Routine Check-up",
    "Urgent Visit",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time) {
      alert("Please select date and time");
      return;
    }
    const randomTitle =
      randomTitles[Math.floor(Math.random() * randomTitles.length)];

    const newAppointment = {
      id: Date.now(), // unique ID
      title: randomTitle,
      doctorName: doctorName || "Dr. Demo",
      appointmentDate: date, // date in "yyyy-MM-dd" format
      time: time,            // e.g. "09:00" or "14:30" or "09:00 AM"
      patientName: "John Doe", // Hardcoded for demo; adapt as needed
      notes: "", // If you want to add notes here, you could add a new input field
    };

    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    storedAppointments.push(newAppointment);
    localStorage.setItem("appointments", JSON.stringify(storedAppointments));

    onAppointmentCreated();
    onClose();
    setDate("");
    setTime("");
    setDoctorName("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>New Appointment</DialogTitle>
          <DialogDescription>
            Fill in date and time to create a new appointment
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="doctorName">Doctor Name (Optional)</Label>
              <Input
                type="text"
                id="doctorName"
                placeholder="Dr. Example"
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Create</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

const Dashboard = ({ appointments = [], userType = "doctor" }) => {
  const [view, setView] = useState("month");
  const [date, setDate] = useState(new Date());
  const [BigCalendar, setBigCalendar] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [localAppointments, setLocalAppointments] = useState([]);
  const [showAllAppointmentsModal, setShowAllAppointmentsModal] = useState(false);
  const [showNewAppointmentModal, setShowNewAppointmentModal] = useState(false);

  // Dynamically load react-big-calendar on the client side
  useEffect(() => {
    const importCalendar = async () => {
      const momentLib = await import("moment");
      const moment = momentLib.default;
      const { Calendar, momentLocalizer, Views } = await import("react-big-calendar");
      await import("react-big-calendar/lib/css/react-big-calendar.css");

      const localizer = momentLocalizer(moment);
      const ConfiguredCalendar = (props) => (
        <Calendar
          localizer={localizer}
          views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
          {...props}
        />
      );
      setBigCalendar(() => ConfiguredCalendar);
    };
    importCalendar();
  }, []);

  // Merge appointments from props and localStorage
  const loadAppointments = () => {
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments") || "[]");
    const merged = [...appointments, ...storedAppointments];
    // Remove duplicates by ID
    const uniqueMerged = Array.from(
      new Map(merged.map((item) => [item.id, item])).values()
    );
    // If userType is doctor, filter by doctorId if available
    if (userType === "doctor") {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      if (user && user.id) {
        const filtered = uniqueMerged.filter((app) => app.doctorId === user.id);
        setLocalAppointments(filtered);
      } else {
        setLocalAppointments(uniqueMerged);
      }
    } else {
      setLocalAppointments(uniqueMerged);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, [appointments, userType]);

  // Helper: return date string from appointment
  const getAppDateString = (app) => app.date || app.appointmentDate || "";

  // Filter appointments for the selected date (ignoring time)
  const appointmentsForDate = localAppointments.filter((app) => {
    const dateString = getAppDateString(app);
    const appDate = new Date(dateString);
    if (isNaN(appDate.getTime())) return false;
    return format(appDate, "yyyy-MM-dd") === format(date, "yyyy-MM-dd");
  });

  const totalAppointments = localAppointments.length;
  const nameKey = userType === "doctor" ? "patientName" : "doctorName";
  const uniqueNames = [
    ...new Set(localAppointments.map((app) => app[nameKey]).filter(Boolean)),
  ];

  const now = new Date();
  const pastAppointments = localAppointments.filter((app) => {
    const d = new Date(getAppDateString(app));
    return !isNaN(d.getTime()) && d < now;
  });
  const upcomingAppointments = localAppointments.filter((app) => {
    const d = new Date(getAppDateString(app));
    return !isNaN(d.getTime()) && d >= now;
  });

  // Format appointments for Big Calendar (skip invalid dates)
  const formattedAppointments = localAppointments
    .map((app) => {
      const dateString = getAppDateString(app);
      const startDate = new Date(dateString);
      if (isNaN(startDate.getTime())) return null;

      let hours = 0,
        minutes = 0;
      if (app.time) {
        // If time is "09:00 AM", split by space -> ["09:00", "AM"]
        const timeParts = app.time.split(" ");
        const [hourStr, minuteStr] = timeParts[0].split(":");
        let parsedHours = parseInt(hourStr, 10) || 0;
        const parsedMinutes = parseInt(minuteStr, 10) || 0;

        if (timeParts[1]) {
          // Convert AM/PM to 24-hour
          if (timeParts[1].toUpperCase() === "PM" && parsedHours !== 12) {
            parsedHours += 12;
          } else if (timeParts[1].toUpperCase() === "AM" && parsedHours === 12) {
            parsedHours = 0;
          }
        }
        hours = parsedHours;
        minutes = parsedMinutes;
      }

      startDate.setHours(hours, minutes, 0);
      const endDate = new Date(startDate);
      endDate.setHours(endDate.getHours() + 1);

      return {
        ...app,
        start: startDate,
        end: endDate,
        title: app.title,
      };
    })
    .filter(Boolean);

  const handleEditAppointment = (appointment) => {
    setEditingAppointment({
      ...appointment,
      date: format(new Date(getAppDateString(appointment)), "yyyy-MM-dd"),
    });
    setIsEditDialogOpen(true);
  };

  const handleSaveAppointment = () => {
    if (!editingAppointment) return;
    setLocalAppointments((prev) =>
      prev.map((app) =>
        app.id === editingAppointment.id ? editingAppointment : app
      )
    );
    setIsEditDialogOpen(false);
    setEditingAppointment(null);
    setSelectedAppointment(null);

    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments") || "[]");
    const updated = storedAppointments.map((a) =>
      a.id === editingAppointment.id ? editingAppointment : a
    );
    localStorage.setItem("appointments", JSON.stringify(updated));
  };

  const EventComponent = ({ event }) => (
    <div className="text-xs p-1">
      <div className="font-bold truncate">{event.title}</div>
      <div>{event.time}</div>
    </div>
  );

  const handleAppointmentCreated = () => {
    loadAppointments();
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Sidebar */}
      <div className="w-1/5 p-4 border-r border-gray-200 bg-white overflow-y-auto shadow-md">
        <h1 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
          <span className="bg-blue-500 w-2 h-6 mr-2 rounded-sm"></span>
          Your Dashboard
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-4 mb-6">
          <Card
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-none cursor-pointer"
            onClick={() => setShowAllAppointmentsModal(true)}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <CalendarIcon className="h-4 w-4 mr-2 opacity-80" />
                Total Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{totalAppointments}</p>
              <p className="text-xs opacity-80 mt-1">
                {userType === "doctor"
                  ? "scheduled with patients"
                  : "with healthcare providers"}
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-700 flex items-center">
                <User className="h-4 w-4 mr-2 text-indigo-500" />
                {userType === "doctor" ? "Patients" : "Your Doctors"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {uniqueNames.length > 0 ? (
                <div className="flex flex-wrap gap-1">
                  {uniqueNames.map((name, index) => (
                    <Badge
                      key={`unique-name-${name}-${index}`}
                      variant="outline"
                      className="bg-indigo-50 text-indigo-700 border-indigo-200 text-xs"
                    >
                      {name}
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-500">No appointments scheduled</p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Daily Appointments */}
        <Card className="border-none shadow-sm">
          <CardHeader className="pb-2 bg-gray-50 rounded-t-lg">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-green-500" />
                <span>{format(date, "MMMM d, yyyy")}</span>
              </div>
              {userType === "doctor" && appointmentsForDate.length > 0 && (
                <Button variant="ghost" size="sm" className="h-6 px-2 text-xs text-blue-600">
                  View All
                </Button>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="max-h-96 overflow-y-auto p-3">
            {appointmentsForDate.length > 0 ? (
              <div className="space-y-3">
                {appointmentsForDate.map((app, index) => (
                  <div
                    key={`appointment-${app.id || index}`}
                    className="p-3 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 relative"
                    onClick={() => setSelectedAppointment(app)}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l-lg"></div>
                    <h4 className="font-medium text-gray-800 text-sm">{app.title}</h4>
                    {/* Show Time */}
                    <div className="flex items-center text-gray-500 text-xs mt-2">
                      <Clock className="h-3 w-3 mr-1 text-blue-400" />
                      <span>{app.time}</span>
                    </div>
                    {/* Show Doctor or Patient */}
                    <div className="flex items-center text-gray-500 text-xs mt-1">
                      <User className="h-3 w-3 mr-1 text-blue-400" />
                      <span>{app[nameKey]}</span>
                    </div>
                    {/* Show Notes if present */}
                    {app.notes && (
                      <div className="flex items-center text-gray-500 text-xs mt-1">
                        <MessageSquare className="h-3 w-3 mr-1 text-blue-400" />
                        <span>{app.notes}</span>
                      </div>
                    )}

                    {userType === "doctor" && selectedAppointment?.id === app.id && (
                      <div className="flex justify-end mt-2 pt-2 border-t border-gray-100">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 px-2 text-xs text-blue-600 hover:bg-blue-50"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditAppointment(app);
                          }}
                        >
                          <Edit className="h-3 w-3 mr-1" /> Edit
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-36 text-center bg-gray-50 rounded-lg">
                <CalendarIcon className="h-10 w-10 text-gray-300 mb-2" />
                <p className="text-gray-500 text-sm">No appointments for this day</p>
                <p className="text-gray-400 text-xs mt-1">
                  Select a different date or add a new appointment
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <Button
          className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-200"
          onClick={() => setShowNewAppointmentModal(true)}
        >
          <Plus className="h-4 w-4 mr-1" /> New Appointment
        </Button>
      </div>

      {/* Main Calendar */}
      <div className="w-4/5 p-4 overflow-hidden">
        <div className="flex justify-between items-center mb-4 bg-white p-3 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <span className="bg-indigo-500 w-2 h-6 mr-2 rounded-sm"></span>
            Appointment Calendar
          </h2>
          <Tabs defaultValue="month" className="w-auto" onValueChange={setView}>
            <TabsList className="bg-gray-100">
              <TabsTrigger value="month" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Month
              </TabsTrigger>
              <TabsTrigger value="week" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Week
              </TabsTrigger>
              <TabsTrigger value="day" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Day
              </TabsTrigger>
              <TabsTrigger value="agenda" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Agenda
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-gray-200 h-full">
          {BigCalendar ? (
            <BigCalendar
              events={formattedAppointments}
              startAccessor="start"
              endAccessor="end"
              view={view}
              onView={setView}
              date={date}
              onNavigate={setDate}
              style={{ height: "calc(100vh - 160px)" }}
              components={{ event: EventComponent }}
              eventPropGetter={() => ({
                style: {
                  backgroundColor: "#4f46e5",
                  backgroundImage: "linear-gradient(to right, #4f46e5, #6366f1)",
                  borderRadius: "4px",
                  color: "white",
                  border: "none",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                },
              })}
              dayPropGetter={(currentDate) => {
                const today = new Date();
                if (format(currentDate, "yyyy-MM-dd") === format(today, "yyyy-MM-dd")) {
                  return {
                    style: {
                      backgroundColor: "#f0f9ff",
                      borderTop: "2px solid #3b82f6",
                    },
                  };
                }
                return {};
              }}
              onSelectEvent={(event) => {
                setDate(event.start);
                setSelectedAppointment(event);
                if (userType === "doctor") {
                  handleEditAppointment(event);
                }
              }}
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-gray-500">Loading calendar...</div>
            </div>
          )}
        </div>
      </div>

      {/* Edit Appointment Dialog (for doctors) */}
      {userType === "doctor" && (
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Edit Appointment</DialogTitle>
              <DialogDescription>
                Make changes to this appointment. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            {editingAppointment && (
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">
                    Title
                  </Label>
                  <Input
                    id="title"
                    value={editingAppointment.title || ""}
                    onChange={(e) =>
                      setEditingAppointment({
                        ...editingAppointment,
                        title: e.target.value,
                      })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="date" className="text-right">
                    Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={editingAppointment.date}
                    onChange={(e) =>
                      setEditingAppointment({
                        ...editingAppointment,
                        date: e.target.value,
                      })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="time" className="text-right">
                    Time
                  </Label>
                  <Input
                    id="time"
                    type="time"
                    value={editingAppointment.time || ""}
                    onChange={(e) =>
                      setEditingAppointment({
                        ...editingAppointment,
                        time: e.target.value,
                      })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="status" className="text-right">
                    Status
                  </Label>
                  <div className="col-span-3">
                    <Select
                      value={editingAppointment.status || "scheduled"}
                      onValueChange={(value) =>
                        setEditingAppointment({
                          ...editingAppointment,
                          status: value,
                        })
                      }
                    >
                      <SelectTrigger className="w-full bg-white border-gray-200 focus:ring-blue-500 focus:border-blue-500">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-gray-200">
                        <SelectItem
                          value="scheduled"
                          className="text-gray-800 focus:bg-blue-50 focus:text-blue-700"
                        >
                          Scheduled
                        </SelectItem>
                        <SelectItem
                          value="confirmed"
                          className="text-gray-800 focus:bg-blue-50 focus:text-blue-700"
                        >
                          Confirmed
                        </SelectItem>
                        <SelectItem
                          value="completed"
                          className="text-gray-800 focus:bg-blue-50 focus:text-blue-700"
                        >
                          Completed
                        </SelectItem>
                        <SelectItem
                          value="cancelled"
                          className="text-gray-800 focus:bg-blue-50 focus:text-blue-700"
                        >
                          Cancelled
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="notes" className="text-right">
                    Notes
                  </Label>
                  <Input
                    id="notes"
                    value={editingAppointment.notes || ""}
                    onChange={(e) =>
                      setEditingAppointment({
                        ...editingAppointment,
                        notes: e.target.value,
                      })
                    }
                    className="col-span-3"
                  />
                </div>
              </div>
            )}
            <DialogFooter className="flex justify-between sm:justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsEditDialogOpen(false);
                  setEditingAppointment(null);
                }}
                className="mr-2"
              >
                <X className="h-4 w-4 mr-1" /> Cancel
              </Button>
              <div>
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => {
                    setLocalAppointments((prev) =>
                      prev.filter((app) => app.id !== editingAppointment?.id)
                    );
                    setIsEditDialogOpen(false);
                    setEditingAppointment(null);
                    const stored = JSON.parse(
                      localStorage.getItem("appointments") || "[]"
                    );
                    const updated = stored.filter(
                      (a) => a.id !== editingAppointment?.id
                    );
                    localStorage.setItem("appointments", JSON.stringify(updated));
                  }}
                  className="mr-2"
                >
                  <Archive className="h-4 w-4 mr-1" /> Delete
                </Button>
                <Button type="button" onClick={handleSaveAppointment}>
                  <Check className="h-4 w-4 mr-1" /> Save Changes
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* All Appointments Modal */}
      <Dialog
        open={showAllAppointmentsModal}
        onOpenChange={setShowAllAppointmentsModal}
      >
        <DialogContent className="max-w-xl w-full">
          <DialogHeader>
            <DialogTitle>All Appointments</DialogTitle>
            <DialogDescription>
              View upcoming and previous appointments
            </DialogDescription>
          </DialogHeader>
          <div className="max-h-96 overflow-y-auto space-y-8 mt-4">
            {/* UPCOMING */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">
                Upcoming Appointments
              </h3>
              {upcomingAppointments.length > 0 ? (
                <div className="space-y-2">
                  {upcomingAppointments.map((app, index) => (
                    <div
                      key={`upcoming-${app.id || index}`}
                      className="bg-white border rounded p-3 shadow-sm"
                    >
                      <h4 className="font-medium text-sm">
                        {app.title}{" "}
                        <span className="ml-2 text-xs text-gray-400">
                          ({format(new Date(getAppDateString(app)), "PPPP")})
                        </span>
                      </h4>
                      <p className="text-xs text-gray-600 mt-1">
                        Time: {app.time}
                      </p>
                      <p className="text-xs text-gray-600">
                        {userType === "doctor" ? "Patient" : "Doctor"}:{" "}
                        {app[nameKey] || "N/A"}
                      </p>
                      {/* Show notes if present */}
                      {app.notes && (
                        <p className="text-xs text-gray-600 mt-1">
                          Notes: {app.notes}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">
                  No upcoming appointments
                </p>
              )}
            </div>

            {/* PREVIOUS */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">
                Previous Appointments
              </h3>
              {pastAppointments.length > 0 ? (
                <div className="space-y-2">
                  {pastAppointments.map((app, index) => (
                    <div
                      key={`past-${app.id || index}`}
                      className="bg-white border rounded p-3 shadow-sm"
                    >
                      <h4 className="font-medium text-sm">
                        {app.title}{" "}
                        <span className="ml-2 text-xs text-gray-400">
                          ({format(new Date(getAppDateString(app)), "PPPP")})
                        </span>
                      </h4>
                      <p className="text-xs text-gray-600 mt-1">
                        Time: {app.time}
                      </p>
                      <p className="text-xs text-gray-600">
                        {userType === "doctor" ? "Patient" : "Doctor"}:{" "}
                        {app[nameKey] || "N/A"}
                      </p>
                      {/* Show notes if present */}
                      {app.notes && (
                        <p className="text-xs text-gray-600 mt-1">
                          Notes: {app.notes}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">No past appointments</p>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setShowAllAppointmentsModal(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* New Appointment Modal */}
      <NewAppointmentModal
        isOpen={showNewAppointmentModal}
        onClose={() => setShowNewAppointmentModal(false)}
        onAppointmentCreated={handleAppointmentCreated}
      />
    </div>
  );
};

export default Dashboard;
