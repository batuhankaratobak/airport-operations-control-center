import type { Alert, Flight, Gate } from "./types";

export const flights: Flight[] = [
  { id: "aa-2184", flightNumber: "AA 2184", airline: "Aero Anatolia", type: "departure", origin: "Antalya", originCode: "AYT", destination: "Berlin", destinationCode: "BER", scheduledTime: "08:35", estimatedTime: "08:35", gate: "204", terminal: "T2", status: "boarding", aircraft: "Airbus A321neo" },
  { id: "ns-402", flightNumber: "NS 402", airline: "Nordic Sky", type: "arrival", origin: "Stockholm", originCode: "ARN", destination: "Antalya", destinationCode: "AYT", scheduledTime: "08:45", estimatedTime: "09:05", gate: "112", terminal: "T1", status: "delayed", aircraft: "Boeing 737-800" },
  { id: "sm-771", flightNumber: "SM 771", airline: "Sun Meridian", type: "departure", origin: "Antalya", originCode: "AYT", destination: "London", destinationCode: "LGW", scheduledTime: "09:10", estimatedTime: "09:10", gate: "206", terminal: "T2", status: "on-time", aircraft: "Airbus A320neo" },
  { id: "be-109", flightNumber: "BE 109", airline: "Baltic Express", type: "arrival", origin: "Riga", originCode: "RIX", destination: "Antalya", destinationCode: "AYT", scheduledTime: "09:20", estimatedTime: "09:20", gate: "105", terminal: "T1", status: "on-time", aircraft: "Airbus A220-300" },
  { id: "cw-553", flightNumber: "CW 553", airline: "Crown Wings", type: "departure", origin: "Antalya", originCode: "AYT", destination: "Manchester", destinationCode: "MAN", scheduledTime: "09:40", estimatedTime: "10:15", gate: "208", terminal: "T2", status: "delayed", aircraft: "Boeing 737 MAX 8" },
  { id: "ae-830", flightNumber: "AE 830", airline: "Aegean Connect", type: "arrival", origin: "Athens", originCode: "ATH", destination: "Antalya", destinationCode: "AYT", scheduledTime: "09:55", estimatedTime: "09:48", gate: "108", terminal: "T1", status: "landed", aircraft: "Airbus A320" },
  { id: "nv-614", flightNumber: "NV 614", airline: "Northvia", type: "departure", origin: "Antalya", originCode: "AYT", destination: "Helsinki", destinationCode: "HEL", scheduledTime: "10:05", estimatedTime: "10:05", gate: "211", terminal: "T2", status: "on-time", aircraft: "Airbus A321" },
  { id: "mt-332", flightNumber: "MT 332", airline: "Mediterranean Air", type: "arrival", origin: "Rome", originCode: "FCO", destination: "Antalya", destinationCode: "AYT", scheduledTime: "10:20", estimatedTime: "10:20", gate: "114", terminal: "T1", status: "on-time", aircraft: "Boeing 737-800" },
  { id: "aa-915", flightNumber: "AA 915", airline: "Aero Anatolia", type: "departure", origin: "Antalya", originCode: "AYT", destination: "Amsterdam", destinationCode: "AMS", scheduledTime: "10:45", estimatedTime: "10:45", gate: "203", terminal: "T2", status: "on-time", aircraft: "Airbus A321neo" },
  { id: "aw-220", flightNumber: "AW 220", airline: "Alpine Wings", type: "arrival", origin: "Vienna", originCode: "VIE", destination: "Antalya", destinationCode: "AYT", scheduledTime: "11:00", estimatedTime: "11:25", gate: "110", terminal: "T1", status: "delayed", aircraft: "Embraer E195-E2" },
  { id: "ea-704", flightNumber: "EA 704", airline: "Euro Atlantic", type: "departure", origin: "Antalya", originCode: "AYT", destination: "Paris", destinationCode: "CDG", scheduledTime: "11:15", estimatedTime: "11:15", gate: "205", terminal: "T2", status: "on-time", aircraft: "Airbus A320neo" },
  { id: "ns-481", flightNumber: "NS 481", airline: "Nordic Sky", type: "arrival", origin: "Copenhagen", originCode: "CPH", destination: "Antalya", destinationCode: "AYT", scheduledTime: "11:30", estimatedTime: "11:30", gate: "107", terminal: "T1", status: "on-time", aircraft: "Boeing 737-800" },
];

export const gates: Gate[] = [
  { id: "g-105", number: "105", terminal: "T1", currentFlight: "BE 109", nextFlight: "MT 332", nextFlightTime: "12:40", status: "occupied" },
  { id: "g-107", number: "107", terminal: "T1", nextFlight: "NS 481", nextFlightTime: "11:30", status: "available" },
  { id: "g-108", number: "108", terminal: "T1", currentFlight: "AE 830", nextFlight: "AE 845", nextFlightTime: "13:10", status: "occupied" },
  { id: "g-110", number: "110", terminal: "T1", nextFlight: "AW 220", nextFlightTime: "11:25", status: "available" },
  { id: "g-112", number: "112", terminal: "T1", nextFlight: "NS 402", nextFlightTime: "09:05", status: "available" },
  { id: "g-114", number: "114", terminal: "T1", status: "maintenance" },
  { id: "g-203", number: "203", terminal: "T2", nextFlight: "AA 915", nextFlightTime: "10:45", status: "available" },
  { id: "g-204", number: "204", terminal: "T2", currentFlight: "AA 2184", nextFlight: "NV 672", nextFlightTime: "12:20", status: "boarding" },
  { id: "g-205", number: "205", terminal: "T2", nextFlight: "EA 704", nextFlightTime: "11:15", status: "available" },
  { id: "g-206", number: "206", terminal: "T2", currentFlight: "SM 771", nextFlight: "SM 786", nextFlightTime: "13:45", status: "boarding" },
  { id: "g-208", number: "208", terminal: "T2", currentFlight: "CW 553", nextFlight: "CW 602", nextFlightTime: "14:05", status: "occupied" },
  { id: "g-211", number: "211", terminal: "T2", nextFlight: "NV 614", nextFlightTime: "10:05", status: "available" },
];

export const alerts: Alert[] = [
  { id: "al-1", severity: "high", category: "Airside", message: "Runway 18R inspection extended by 20 minutes", timestamp: "08:42", resolved: false, location: "Runway 18R" },
  { id: "al-2", severity: "medium", category: "Gate operations", message: "Gate 114 unavailable for scheduled maintenance", timestamp: "08:28", resolved: false, location: "Terminal 1" },
  { id: "al-3", severity: "low", category: "Baggage", message: "Carousel 6 assignment updated for arriving flight AE 830", timestamp: "08:16", resolved: true, location: "Arrivals Hall" },
  { id: "al-4", severity: "medium", category: "Weather", message: "Crosswind forecast to increase after 12:00 local time", timestamp: "07:55", resolved: false, location: "Airfield" },
  { id: "al-5", severity: "low", category: "Passenger flow", message: "Security lane 4 reopened; queues returning to normal", timestamp: "07:31", resolved: true, location: "Terminal 2" },
  { id: "al-6", severity: "high", category: "Ground handling", message: "Belt loader fault reported at stand 208", timestamp: "07:18", resolved: true, location: "Stand 208" },
];
