// import Image from "next/image";
"use client";
import { useState } from "react";
import { Button } from "../../components/ui/button";

export default function Home() {
  const [loading, setLoading] = useState(false);
  return (
    <main className="container mx-auto mt-20">
      <div className="grid grid-cols-5 items-center justify-center gap-8">
        <Button className="justify-self-center" size="sm">
          Button
        </Button>

        <Button className="justify-self-center" size="md">
          Button
        </Button>

        <Button className="justify-self-center" size="lg" disabled>
          Button
        </Button>

        <Button
          className="justify-self-center"
          size="xl"
          loading={loading}
          onClick={() => setLoading(!loading)}
        >
          Button
        </Button>
        <Button
          className="justify-self-center"
          size="xxl"
          loading={loading}
          onClick={() => setLoading(!loading)}
        >
          Button
        </Button>
      </div>
    </main>
  );
}
