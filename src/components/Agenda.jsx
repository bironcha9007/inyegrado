import React, { useState } from "react";
import Calendar from "react-calendar";

import { eventosCalendario } from "../constants"; // Importar eventos

const Agenda = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  const getEventsForDate = (date) => {
    const dateString = date.toISOString().split("T")[0];
    return eventosCalendario.filter((event) => event.fecha === dateString);
  };

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const events = getEventsForDate(date);
      if (events.length) {
        return (
          <ul style={styles.eventList}>
            {events.map((event) => (
              <li
                key={event.id}
                style={styles.eventItem}
                onClick={() => handleEventClick(event)}
              >
                {event.titulo}
              </li>
            ))}
          </ul>
        );
      }
    }
    return null;
  };

  return (
    <div style={styles.agendaContainer}>
      <h1 style={styles.title}>Agenda del Mes</h1>
      <Calendar
        onChange={handleDateClick}
        value={selectedDate}
        tileContent={tileContent}
        className="custom-calendar"
      />

      {modalOpen && selectedEvent && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h2>{selectedEvent.titulo}</h2>
            <p>
              <strong>Fecha:</strong> {selectedEvent.fecha}
            </p>
            <p>
              <strong>Hora:</strong> {selectedEvent.horaInicio} -{" "}
              {selectedEvent.horaFin}
            </p>
            <p>
              <strong>Lugar:</strong> {selectedEvent.lugar}
            </p>
            <p>
              <strong>Descripción:</strong> {selectedEvent.descripcion}
            </p>
            <button style={styles.closeButton} onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  agendaContainer: {
  
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    width: "100%",
  },
  title: {
    color: "#333",
  },
  eventList: {
    
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  eventItem: {

    color: "#fff",
    backgroundColor: "#007bff",
    padding: "2px 5px",
    borderRadius: "3px",
    marginBottom: "2px",
    cursor: "pointer",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "500px",
    width: "90%",
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default Agenda;
