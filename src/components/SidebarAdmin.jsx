"use client";
import React, { useEffect, useState } from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import { FcAcceptDatabase } from "react-icons/fc";
import {
  LuArrowLeftFromLine,
  LuArrowRightToLine,
  LuLayoutDashboard,
} from "react-icons/lu";

import Link from "next/link";
import { usePathname } from "next/navigation";
import TreeView from "react-treeview";
import "react-treeview/react-treeview.css";

const rolesData = [
  {
    label: "Central Admin",
    collapsed: true,
    children: [
      {
        label: "Dhaka",
        collapsed: true,
        children: [
          {
            label: "Cluster Admin 1",
            collapsed: true,
            children: [
              {
                label: "District Admin 1",
                collapsed: true,
                children: [
                  {
                    label: "Area Admin 1",
                    collapsed: true,
                    children: [
                      {
                        label: "Upazila Admin 1",
                        collapsed: true,
                        children: [
                          {
                            label: "Union Admin 1",
                            collapsed: true,
                            children: [
                              {
                                label: "Faysal",
                                href: "userdashboard",
                                collapsed: true,
                                children: [],
                              },
                              {
                                label: "Juwel",
                                href: "userdashboard",
                                collapsed: true,
                                children: [],
                              },
                              {
                                label: "User 3",
                                collapsed: true,
                                children: [],
                              },
                            ],
                          },
                          {
                            label: "Union Admin 2",
                            collapsed: true,
                            children: [
                              {
                                label: "User 4",
                                collapsed: true,
                                children: [],
                              },
                              {
                                label: "User 5",
                                collapsed: true,
                                children: [],
                              },
                              {
                                label: "User 6",
                                collapsed: true,
                                children: [],
                              },
                            ],
                          },
                          {
                            label: "Union Admin 3",
                            collapsed: true,
                            children: [
                              {
                                label: "User 7",
                                collapsed: true,
                                children: [],
                              },
                              {
                                label: "User 8",
                                collapsed: true,
                                children: [],
                              },
                              {
                                label: "User 9",
                                collapsed: true,
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        label: "Upazila Admin 2",
                        collapsed: true,
                        children: [
                          {
                            label: "Union Admin 4",
                            collapsed: true,
                            children: [
                              {
                                label: "User 10",
                                collapsed: true,
                                children: [],
                              },
                              {
                                label: "User 11",
                                collapsed: true,
                                children: [],
                              },
                              {
                                label: "User 12",
                                collapsed: true,
                                children: [],
                              },
                            ],
                          },
                          {
                            label: "Union Admin 5",
                            collapsed: true,
                            children: [
                              {
                                label: "User 13",
                                collapsed: true,
                                children: [],
                              },
                              {
                                label: "User 14",
                                collapsed: true,
                                children: [],
                              },
                              {
                                label: "User 15",
                                collapsed: true,
                                children: [],
                              },
                            ],
                          },
                          {
                            label: "Union Admin 6",
                            collapsed: true,
                            children: [
                              {
                                label: "User 16",
                                collapsed: true,
                                children: [],
                              },
                              {
                                label: "User 17",
                                collapsed: true,
                                children: [],
                              },
                              {
                                label: "User 18",
                                collapsed: true,
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        label: "Upazila Admin 3",
                        collapsed: true,
                        children: [
                          {
                            label: "Union Admin 7",
                            collapsed: true,
                            children: [
                              {
                                label: "User 19",
                                collapsed: true,
                                children: [],
                              },
                              {
                                label: "User 20",
                                collapsed: true,
                                children: [],
                              },
                              {
                                label: "User 21",
                                collapsed: true,
                                children: [],
                              },
                            ],
                          },
                          {
                            label: "Union Admin 8",
                            collapsed: true,
                            children: [
                              {
                                label: "User 22",
                                collapsed: true,
                                children: [],
                              },
                              {
                                label: "User 23",
                                collapsed: true,
                                children: [],
                              },
                              {
                                label: "User 24",
                                collapsed: true,
                                children: [],
                              },
                            ],
                          },
                          {
                            label: "Union Admin 9",
                            collapsed: true,
                            children: [
                              {
                                label: "User 25",
                                collapsed: true,
                                children: [],
                              },
                              {
                                label: "User 26",
                                collapsed: true,
                                children: [],
                              },
                              {
                                label: "User 27",
                                collapsed: true,
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: "Area Admin 2",
                    collapsed: true,
                    children: [
                      {
                        label: "Upazila Admin 4",
                        collapsed: true,
                        children: [
                          {
                            label: "Union Admin 10",
                            collapsed: true,
                            children: [
                              {
                                label: "User 28",
                                collapsed: true,
                                children: [],
                              },
                              {
                                label: "User 29",
                                collapsed: true,
                                children: [],
                              },
                              {
                                label: "User 30",
                                collapsed: true,
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        label: "Upazila Admin 5",
                        collapsed: true,
                        children: [],
                      },
                      {
                        label: "Upazila Admin 6",
                        collapsed: true,
                        children: [],
                      },
                    ],
                  },
                  {
                    label: "Area Admin 3",
                    collapsed: true,
                    children: [],
                  },
                ],
              },
              {
                label: "District Admin 2",
                collapsed: true,
                children: [],
              },
              {
                label: "District Admin 3",
                collapsed: true,
                children: [],
              },
            ],
          },
          {
            label: "Cluster Admin 2",
            collapsed: true,
            children: [],
          },
          {
            label: "Cluster Admin 3",
            collapsed: true,
            children: [],
          },
        ],
      },
      {
        label: "Chattogram",
        collapsed: true,
        children: [],
      },
      {
        label: "Rajsahi",
        collapsed: true,
        children: [],
      },
    ],
  },
];

const renderTreeView = (nodes) => {
  return nodes.map((node, index) => (
    <TreeView
      key={index}
      nodeLabel={<span className="font-medium">{node.label}</span>}
      defaultCollapsed={node.collapsed}
      treeViewClassName="my-2"
    >
      {node.children.length > 0 && (
        <div className="ml-4">{renderTreeView(node.children)}</div>
      )}
    </TreeView>
  ));
};

const SidebarAdmin = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser.role) {
        setUserRole(storedUser.role);
      } else {
        setUserRole("guest");
      }
    } catch (error) {
      console.error("Failed to parse user data:", error);
      setUserRole("guest");
    }
    console.log(user.role);
  }, []);

  const toggleMenu = () => setIsCollapsed(!isCollapsed);
  const isActive = (path) => pathname === path;

  const allMenuItems = [
    {
      href: "/admin",
      icon: <LuLayoutDashboard />,
      label: "ড্যাশবোর্ড",
      roles: [
        "centraladmin",
        "divisionadmin",
        "districtadmin",
        "areaadmin",
        "upozilaadmin",
        "user",
      ],
    },
    {
      href: "/admin/register",
      icon: <IoPersonAddSharp />,
      label: "দায়ী এড করা",
      roles: ["centraladmin"], // Only visible to centraladmin
    },
    {
      href: "/admin/notification",
      icon: <FcAcceptDatabase />,
      label: "অনুমতি দিন",
      roles: [
        "centraladmin",
        "divisionadmin",
        "districtadmin",
        "areaadmin",
        "upozilaadmin",
        "user",
      ],
    },
    {
      custom: true, // Indicates a custom content section
      label: "Role Management",
      roles: [
        "centraladmin",
        "divisionadmin",
        "districtadmin",
        "areaadmin",
        "upozilaadmin",
      ],
      content: <div className="mr-2">{renderTreeView(rolesData)}</div>,
    },
  ];

  // Filter menu items based on the user's role
  const filteredMenuItems = allMenuItems.filter((item) =>
    item.roles.includes(userRole)
  );

  return (
    <aside
      className={`flex flex-col ${
        isCollapsed ? "w-[68px]" : "w-auto"
      } transition-width duration-500 h-screen border border-r border-[#0f3e4d] bg-[#155E75] `}
    >
      <div className="p-4 text-right">
        <button
          onClick={toggleMenu}
          aria-expanded={!isCollapsed}
          aria-label={isCollapsed ? "Expand menu" : "Collapse menu"}
          className="text-white focus:outline-none"
        >
          {isCollapsed ? <LuArrowRightToLine /> : <LuArrowLeftFromLine />}
        </button>
      </div>

      <nav className="p-4 grow overflow-y-auto mx-auto">
        {userRole ? (
          <ul className="space-y-2">
            {filteredMenuItems.map(
              ({ href, icon, label, custom, content }, index) =>
                custom ? (
                  <li key={`custom-${index}`} className="text-white">
                    <div className="text-lg font-bold mb-4">{label}</div>
                    {content}
                  </li>
                ) : (
                  <li key={`menu-${href}`}>
                    <Link
                      href={href}
                      className={`flex py-2 px-2 items-center font-medium ${
                        isCollapsed ? "gap-0" : "gap-3"
                      } whitespace-nowrap ${
                        isActive(href)
                          ? "bg-cyan-600 rounded-md text-white"
                          : "hover:text-white text-white/80"
                      }`}
                      aria-current={isActive(href) ? "page" : undefined}
                    >
                      <div>{icon}</div>
                      <span
                        className={`text-sm ${
                          isCollapsed ? "hidden" : "block"
                        }`}
                      >
                        {label}
                      </span>
                    </Link>
                  </li>
                )
            )}
          </ul>
        ) : (
          <div className="text-white text-center">Loading...</div>
        )}
      </nav>
    </aside>
  );
};

export default SidebarAdmin;
