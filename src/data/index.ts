import { Warning } from "../assets/icons/AllSvgIcons";

export const stats = [
  {
    title: "New Patients",
    value: "20",
    icon: "👤",
  },
  {
    title: "Average Wait Time",
    value: "25 min",
    icon: "⏱️",
    extraIcon: Warning,
  },
  {
    title: "Patients in Queue",
    value: "10",
    icon: "🛏️",
    extraText: "Queue No.",
    queueNo: "11-22",
  },
  {
    title: "Cancellations",
    value: "2",
    icon: "📉",
  },
  {
    title: "Urgent Cases",
    value: "10",
    icon: "⚠️",
    extraText: "Queue No.",
    queueNo: "4421",
  },
];

export const overviewStats = [
  { title: "New Patients", count: 10 },
  { title: "Nurse Seen", count: 12 },
  { title: "Doctor Visited", count: 14 },
  { title: "Appointment", count: 16 },
];

export const pageSizeOptions = [
  {
    value: 10,
    label: "10",
  },
  {
    value: 15,
    label: "15",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 50,
    label: "50",
  },
];

export const doctorOptions = [
  { value: 1, label: "Dr. Smith" },
  { value: 2, label: "Dr. Alex" },
];
