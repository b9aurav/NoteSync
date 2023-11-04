"use client";

import { FaPenNib } from "react-icons/fa";
import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";

export default function Login() {
  const [isLoading, setisLoading] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 justify-center">
      <div className="border border-gray-700 p-3 bg-gray-200 rounded-t-2xl">
        <Label className="text-xl font-bold underline flex font-mono justify-center items-center">
          <FaPenNib /> <span className="ml-2">NoteSync</span>
        </Label>
      </div>
      <div className="border p-8 rounded-lg border-gray-500">
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="text" value="Your username" />
            </div>
            <TextInput id="text" type="text" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <Button color="dark" type="submit" className="flex items-center">
            {isLoading && <Spinner size="sm" className="mr-3" />}
            <span className="transition-all">Login</span>
          </Button>
          <Button color="gray" href="../auth/register" type="submit">
            Register
          </Button>
        </form>
      </div>
    </main>
  );
}
