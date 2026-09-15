"use client";

import React, { createContext, useContext, useState } from "react";

interface BookingContextType {
  isBookingOpen: boolean;
  selectedRoom: string;
  openBookingModal: (roomName?: string) => void;
  closeBookingModal: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("");

  const openBookingModal = (roomName?: string) => {
    setSelectedRoom(roomName || "");
    setIsBookingOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingOpen(false);
  };

  return (
    <BookingContext.Provider
      value={{
        isBookingOpen,
        selectedRoom,
        openBookingModal,
        closeBookingModal,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBookingModal() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBookingModal must be used within a BookingProvider");
  }
  return context;
}
