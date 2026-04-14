import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import db from "@/lib/db";
import { CAR_DATA } from "@/lib/carData";
import { buildCarAvailabilityMap } from "@/lib/availability";
import { getTodayDateString } from "@/lib/booking";
import AdminDashboard from "@/components/AdminDashboard";

export default async function DashboardPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin");
  }

  const bookings = await db.getAllBookings();
  const initialAvailabilityByCar = await buildCarAvailabilityMap(
    CAR_DATA,
    (carImg) => db.getBlockedDatesForCar(carImg),
    1,
    getTodayDateString()
  );

  return (
    <AdminDashboard
      initialBookings={bookings}
      initialAvailabilityByCar={initialAvailabilityByCar}
    />
  );
}
