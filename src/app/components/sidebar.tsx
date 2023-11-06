import React, { useState } from "react";
import {
  Avatar,
  Button,
  Dropdown,
  Label,
  Sidebar as Sider,
} from "flowbite-react";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { GoOrganization } from "react-icons/go";
import { FaPenNib } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const [Organizations, setOrganizations] = useState([
    { id: 1, name: "Organization 1" },
    { id: 2, name: "Organization 2" },
    { id: 3, name: "Organization 3" },
    { id: 4, name: "Organization 4" },
    { id: 5, name: "Organization 5" },
    { id: 6, name: "Organization 6" },
    { id: 7, name: "Organization 7" },
    { id: 8, name: "Organization 8" },
  ]);

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)} className="lg:hidden border-0 rounded-none w-screen" color="dark">
        {isOpen ? <AiOutlineClose/>:<AiOutlineMenu />}
      </Button>
      {isOpen && (
        <Sider className="h-screen fixed border-gray-300 border-r-2  w-[18rem] lg:static">
          <div className="flex items-center justify-center bg-gray-400 rounded-md">
            <Label className="text-xl font-bold underline flex font-mono my-4 text-[white] justify-center items-center">
              <FaPenNib /> <span className="ml-2">NoteSync</span>
            </Label>
          </div>
          <Sider.Items className="mt-4">
            <div className="w-[16rem]">
              <Sider.ItemGroup>
                <Dropdown
                  label=""
                  dismissOnClick={false}
                  renderTrigger={() => (
                    <Sider.Item>
                      <div className="flex items-center">
                        <Avatar size="sm" rounded></Avatar>
                        <Label className="align-middle ml-2">User</Label>
                      </div>
                    </Sider.Item>
                  )}
                >
                  <Dropdown.Header className="flex items-center flex-col ">
                    <Avatar size="md" rounded></Avatar>
                    <span className="block text-sm mt-2">Full Name</span>
                  </Dropdown.Header>
                  <div className="flex items-center justify-center gap-2 m-3">
                    <Button color="green" size="xs">
                      <FiSettings className="mr-3 h-4 w-4" />
                      Settings
                    </Button>
                    <Button color="red" size="xs">
                      <BiLogOut className="mr-3 h-4 w-4" />
                      Logout
                    </Button>
                  </div>
                </Dropdown>
              </Sider.ItemGroup>
            </div>
            <Sider.ItemGroup>
              <Sider.Item icon={BsPlusLg}>
                <Label>Create Organization</Label>
              </Sider.Item>
              <Sider.Collapse icon={GoOrganization} label="My Organizations">
                {Organizations.map((org) => (
                  <Sider.Item key={org.id} icon={GoOrganization}>
                    <Label>{org.name}</Label>
                  </Sider.Item>
                ))}
              </Sider.Collapse>
            </Sider.ItemGroup>
            <Sider.ItemGroup>
              <Sider.Item icon={BsPlusLg}>
                <Label>Join Organization</Label>
              </Sider.Item>
              <Sider.Collapse icon={GoOrganization} label="Joined Organizations">
                {Organizations.map((org) => (
                  <Sider.Item key={org.id} icon={GoOrganization}>
                    <Label>{org.name}</Label>
                  </Sider.Item>
                ))}
              </Sider.Collapse>
            </Sider.ItemGroup>
          </Sider.Items>
        </Sider>
      )}
    </>
  );
}

export default Sidebar;
