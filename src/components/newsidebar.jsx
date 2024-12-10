import React from "react";
import TreeView from "react-treeview";
import "react-treeview/react-treeview.css";

const NewSideBar = () => {
  const rolesData = [
    {
      label: "Central Admin",
      collapsed: true,
      children: [
        {
          label: "Division Admin 1",
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
                                  label: "User 1",
                                  collapsed: true,
                                  children: [],
                                },
                                {
                                  label: "User 2",
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
          label: "Division Admin 2",
          collapsed: true,
          children: [],
        },
        {
          label: "Division Admin 3",
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

  return (
    <div className="p-4 bg-gray-100 rounded-lg max-w-md mx-auto">
      <h1 className="text-lg font-bold mb-4 text-gray-700">
        Login Admin's Name Here{" "}
      </h1>
      {renderTreeView(rolesData)}
    </div>
  );
};

export default NewSideBar;
