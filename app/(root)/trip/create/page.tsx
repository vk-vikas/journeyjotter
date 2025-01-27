import { auth } from "@/auth";
import { redirect } from "next/navigation";
import TripForm from "@/components/TripForm";

const Page = async () => {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Submit Your Trip</h1>
      </section>

      <TripForm />
    </>
  );
};

export default Page;
