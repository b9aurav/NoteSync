"use client";

import { FaPenNib } from "react-icons/fa";
import {
  Avatar,
  Button,
  DarkThemeToggle,
  FileInput,
  Flowbite,
  Label,
  Spinner,
  TextInput,
} from "flowbite-react";
import { useRef, useState } from "react";

export default function Register() {
  const [isLoading, setisLoading] = useState(false);
  const [avatar, setAvatar] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="border border-gray-700 p-3 bg-gray-200 rounded-t-2xl">
        <Label className="text-xl font-bold underline flex font-mono">
          <FaPenNib /> <span className="ml-2">NoteSync</span>
        </Label>
      </div>
      <div className="border p-8 rounded-lg border-gray-500">
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Full name" />
            </div>
            <TextInput id="name" type="text" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="Username" />
            </div>
            <TextInput id="username" type="text" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="confirm-password" value="Re-enter Password" />
            </div>
            <TextInput id="confirm-password" type="password" required />
          </div>
          <div id="fileUpload" className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="file" value="Avatar" />
            </div>
            <FileInput
              ref={fileInputRef}
              onChange={handleFileInputChange}
              id="avatar"
            />
          </div>
          <Avatar alt="avatar" rounded img={avatar} bordered size="lg" />
          <Button color="dark" type="submit" className="flex items-center">
            {isLoading && <Spinner size="sm" className="mr-3" />}
            <span className="transition-all">Register</span>
          </Button>
          <Button color="gray" href="../auth/login" type="submit">
            Login
          </Button>
        </form>
      </div>
    </main>
  );
}
