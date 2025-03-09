"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate a form submission (e.g., via API)
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitSuccess(true);
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Contact Details Section */}
          <div className="w-full md:w-1/2 p-8 bg-gradient-to-r from-[#5636e5] to-[#7a60ff] text-white">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-8">
              We would love to hear from you. Please reach out for any queries or feedback.
            </p>
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 mr-3" />
              <span>contact@example.com</span>
            </div>
            <div className="flex items-center mb-4">
              <Phone className="w-6 h-6 mr-3" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 mr-3" />
              <span>1234 Street, City, Country</span>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full md:w-1/2 p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            {submitSuccess && (
              <div className="mb-4 p-4 bg-green-100 text-green-800 rounded">
                Your message has been sent successfully!
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="block text-gray-700">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="subject" className="block text-gray-700">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message" className="block text-gray-700">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-1"
                  rows={4}
                  required
                />
              </div>
              <Button
                type="submit"
                className="mt-4 w-full bg-gradient-to-r from-[#5636e5] to-[#7a60ff] hover:opacity-90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
