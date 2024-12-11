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
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

// Tree structure with paths for specific nodes
const MUI_X_PRODUCTS = [
  {
    id: "1",
    label: "Central Admin",
    children: [
      {
        id: "1-1",
        label: "Division Admin",
        children: [
          {
            id: "1-1-1",
            label: "ময়মনসিংহ",
            children: [
              {
                id: "1-1-1-1",
                label: "Cluster Admin 1",
                children: [
                  {
                    id: "1-1-1-1-1",
                    label: "জামালপুর",
                    children: [
                      {
                        id: "1-1-1-1-1-1",
                        label: "জামালপুর সদর",
                        children: [
                          {
                            id: "1-1-1-1-1-1-1",
                            label: "শাহবাজপুর ",
                            children: [
                              {
                                id: "1-1-1-1-1-1-1-1",
                                label: "Faysal",
                                path: "/admin/faysal",
                              },
                              {
                                id: "1-1-1-1-1-1-1-2",
                                label: "Jewel",
                                path: "/admin/jewel",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                id: "1-1-1-2",
                label: "Cluster Admin 2",
                children: [
                  {
                    id: "1-1-1-2-1",
                    label: "Khutia",
                  },
                  {
                    id: "1-1-1-2-2",
                    label: "Jessore",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

// Recursive render function for MUI Tree View
const renderTree = (nodes) => {
  return nodes.map((node) => (
    <TreeItem
      key={node.id}
      itemId={node.id}
      label={
        node.path ? (
          <Link href={node.path} passHref>
            <span className="font-medium text-white hover:text-cyan-400">
              {node.label}
            </span>
          </Link>
        ) : (
          <span className="font-medium">{node.label}</span>
        )
      }
    >
      {node.children && renderTree(node.children)}
    </TreeItem>
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
      alert("Failed to parse user data:", error);
      setUserRole("guest");
    }
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
        "unionadmin",
      ],
    },
    {
      href: "/admin/register",
      icon: <IoPersonAddSharp />,
      label: "দায়ী এড করা",
      roles: ["centraladmin"],
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
        "unionadmin",
      ],
    },
    {
      custom: true,
      label: "Role Management",
      roles: [
        "centraladmin",
        "divisionadmin",
        "districtadmin",
        "areaadmin",
        "upozilaadmin",
        "unionadmin",
      ],
      content: (
        <Stack spacing={2}>
          <Box sx={{ minHeight: 252, minWidth: 150 }}>
            <SimpleTreeView>{renderTree(MUI_X_PRODUCTS)}</SimpleTreeView>
          </Box>
        </Stack>
      ),
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
                    <div className=" font-bold mb-4">{label}</div>
                    {content}
                  </li>
                ) : (
                  <li key={`menu-${href}`}>
                    <Link
                      href={href}
                      className={`flex py-2 px-2 items-center font-xl ${
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

// "use client";
// import React, { useEffect, useState } from "react";
// import { IoPersonAddSharp } from "react-icons/io5";
// import { FcAcceptDatabase } from "react-icons/fc";
// import {
//   LuArrowLeftFromLine,
//   LuArrowRightToLine,
//   LuLayoutDashboard,
// } from "react-icons/lu";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import TreeView from "react-treeview";
// import "react-treeview/react-treeview.css";

// const rolesData = [
//   {
//     label: "Zisan",

//     collapsed: true,
//     children: [
//       {
//         label: "user Faysal",
//         id: "3",
//         collapsed: true,
//         children: [],
//       },
//       {
//         label: "user Juwel",
//         id: "4",
//         collapsed: true,
//         children: [],
//       },
//     ],
//   },
// ];

// const renderTreeView = (nodes) => {
//   return nodes.map((node, index) => (
//     <TreeView
//       key={index}
//       nodeLabel={
//         node.id ? (
//           <Link href={`/admin/users/${node.id}`}>
//             <span className="font-medium text-blue-500 hover:underline">
//               {node.label}
//             </span>
//           </Link>
//         ) : (
//           <span className="font-medium">{node.label}</span>
//         )
//       }
//       defaultCollapsed={node.collapsed}
//       treeViewClassName="my-2"
//     >
//       {node.children.length > 0 && (
//         <div className="ml-4">{renderTreeView(node.children)}</div>
//       )}
//     </TreeView>
//   ));
// };

// const SidebarAdmin = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [userRole, setUserRole] = useState(null);
//   const pathname = usePathname();

//   useEffect(() => {
//     try {
//       const storedUser = JSON.parse(localStorage.getItem("user"));
//       if (storedUser && storedUser.role) {
//         setUserRole(storedUser.role);
//       } else {
//         setUserRole("guest");
//       }
//     } catch (error) {
//       alert("Failed to parse user data:", error);
//       setUserRole("guest");
//     }
//   }, []);

//   const toggleMenu = () => setIsCollapsed(!isCollapsed);
//   const isActive = (path) => pathname === path;

//   const allMenuItems = [
//     {
//       href: "/admin",
//       icon: <LuLayoutDashboard />,
//       label: "ড্যাশবোর্ড",
//       roles: [
//         "centraladmin",
//         "divisionadmin",
//         "districtadmin",
//         "areaadmin",
//         "upozilaadmin",
//         "unionadmin",
//       ],
//     },
//     {
//       href: "/admin/register",
//       icon: <IoPersonAddSharp />,
//       label: "দায়ী এড করা",
//       roles: ["centraladmin"],
//     },
//     {
//       href: "/admin/notification",
//       icon: <FcAcceptDatabase />,
//       label: "অনুমতি দিন",
//       roles: [
//         "centraladmin",
//         "divisionadmin",
//         "districtadmin",
//         "areaadmin",
//         "upozilaadmin",
//         "unionadmin",
//       ],
//     },
//     {
//       custom: true, // Indicates a custom content section
//       label: "Role Management",
//       roles: [
//         "centraladmin",
//         "divisionadmin",
//         "districtadmin",
//         "areaadmin",
//         "upozilaadmin",
//         "unionadmin",
//       ],
//       content: <div className="mr-2">{renderTreeView(rolesData)}</div>,
//     },
//   ];

//   // Filter menu items based on the user's role
//   const filteredMenuItems = allMenuItems.filter((item) =>
//     item.roles.includes(userRole)
//   );

//   return (
//     <aside
//       className={`flex flex-col ${
//         isCollapsed ? "w-[68px]" : "w-auto"
//       } transition-width duration-500 h-screen border border-r border-[#0f3e4d] bg-[#155E75] `}
//     >
//       <div className="p-4 text-right">
//         <button
//           onClick={toggleMenu}
//           aria-expanded={!isCollapsed}
//           aria-label={isCollapsed ? "Expand menu" : "Collapse menu"}
//           className="text-white focus:outline-none"
//         >
//           {isCollapsed ? <LuArrowRightToLine /> : <LuArrowLeftFromLine />}
//         </button>
//       </div>

//       <nav className="p-4 grow overflow-y-auto mx-auto">
//         {userRole ? (
//           <ul className="space-y-2">
//             {filteredMenuItems.map(
//               ({ href, icon, label, custom, content }, index) =>
//                 custom ? (
//                   <li key={`custom-${index}`} className="text-white">
//                     <div className="text-lg font-bold mb-4">{label}</div>
//                     {content}
//                   </li>
//                 ) : (
//                   <li key={`menu-${href}`}>
//                     <Link
//                       href={href}
//                       className={`flex py-2 px-2 items-center font-medium ${
//                         isCollapsed ? "gap-0" : "gap-3"
//                       } whitespace-nowrap ${
//                         isActive(href)
//                           ? "bg-cyan-600 rounded-md text-white"
//                           : "hover:text-white text-white/80"
//                       }`}
//                       aria-current={isActive(href) ? "page" : undefined}
//                     >
//                       <div>{icon}</div>
//                       <span
//                         className={`text-sm ${
//                           isCollapsed ? "hidden" : "block"
//                         }`}
//                       >
//                         {label}
//                       </span>
//                     </Link>
//                   </li>
//                 )
//             )}
//           </ul>
//         ) : (
//           <div className="text-white text-center">Loading...</div>
//         )}
//       </nav>
//     </aside>
//   );
// };

// export default SidebarAdmin;
