import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import db from "@/lib/db";
import AdminDashboard from "@/components/AdminDashboard";

export default async function DashboardPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin");
  }

  const bookings = db.getAllBookings();

  return <AdminDashboard initialBookings={bookings} />;
}
