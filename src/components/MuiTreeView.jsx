import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { useSelectedUser } from "@/providers/treeProvider";

export default function OnItemClick() {
  const [userEmail, setUserEmail] = React.useState("");
  const { setSelectedUser } = useSelectedUser();

  React.useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

  const getFilteredTreeData = (user) => {
    // Define the hierarchical tree structure starting IDs from 1
    const unions = {
      "monir@gmail.com": {
        id: 1,
        label: "Monir",
        children: [
          {
            id: 2,
            label: "Estiak_division",
            user: "estiak@gmail.com",
            children: [
              {
                id: 3,
                label: "Toyon_district",
                user: "toyon@gmail.com",
                children: [
                  {
                    id: 4,
                    label: "Rifat_upazila",
                    user: "rifat@gmail.com",
                    children: [
                      {
                        id: 5,
                        label: "Zisan_union",
                        user: "zisan@gmail.com",
                        children: [
                          {
                            id: 6,
                            label: "Faysal",
                            user: "faysal@gmail.com",
                          },
                          {
                            id: 7,
                            label: "Jewel",
                            user: "jewel@gmail.com",
                          },
                        ],
                      },
                      {
                        id: 8,
                        label: "Tauhid_union",
                        user: "tauhid@gmail.com",
                        children: [
                          {
                            id: 9,
                            label: "Riyad",
                            user: "riyad@gmail.com",
                          },
                          {
                            id: 10,
                            label: "Nazmul",
                            user: "nazmul@gmail.com",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: 12,
                    label: "Akash_upazila",
                    user: "akash@gmail.com",
                  },
                ],
              },
              {
                id: 13,
                label: "Morshed_district",
                user: "morshed@gmail.com",
              },
            ],
          },
          {
            id: 11,
            label: "Zahid_division",
            user: "zahid@gmail.com",
          },
        ],
      },

      "estiak@gmail.com": {
        id: 2,
        label: "Estiak",
        children: [
          {
            id: 3,
            label: "Toyon_district",
            user: "toyon@gmail.com",
            children: [
              {
                id: 4,
                label: "Rifat_upazila",
                user: "rifat@gmail.com",
                children: [
                  {
                    id: 5,
                    label: "Zisan_union",
                    user: "zisan@gmail.com",
                    children: [
                      { id: 6, label: "Faysal", user: "faysal@gmail.com" },
                      { id: 7, label: "Jewel", user: "jewel@gmail.com" },
                    ],
                  },
                  {
                    id: 8,
                    label: "Tauhid_union",
                    user: "tauhid@gmail.com",
                    children: [
                      { id: 9, label: "Riyad", user: "riyad@gmail.com" },
                      { id: 10, label: "Nazmul", user: "nazmul@gmail.com" },
                    ],
                  },
                ],
              },
              {
                id: 12,
                label: "Akash_upazila",
                user: "akash@gmail.com",
              },
            ],
          },
          {
            id: 11,
            label: "Morshed_district",
            user: "morshed@gmail.com",
          },
        ],
      },

      "toyon@gmail.com": {
        id: 3,
        label: "Toyon",
        children: [
          {
            id: 4,
            label: "Rifat_upazila",
            user: "rifat@gmail.com",
            children: [
              {
                id: 5,
                label: "Zisan_union",
                user: "zisan@gmail.com",
                children: [
                  { id: 6, label: "Faysal", user: "faysal@gmail.com" },
                  { id: 7, label: "Jewel", user: "jewel@gmail.com" },
                ],
              },
              {
                id: 8,
                label: "Tauhid_union",
                user: "tauhid@gmail.com",
                children: [
                  { id: 9, label: "Riyad", user: "riyad@gmail.com" },
                  { id: 10, label: "Nazmul", user: "nazmul@gmail.com" },
                ],
              },
            ],
          },
          {
            id: 12,
            label: "Akash_upazila",
            user: "akash@gmail.com",
          },
        ],
      },
      "rifat@gmail.com": {
        id: 4,
        label: "Rifat",
        children: [
          {
            id: 5,
            label: "Zisan_union",
            user: "zisan@gmail.com",
            children: [
              { id: 6, label: "Faysal", user: "faysal@gmail.com" },
              { id: 7, label: "Jewel", user: "jewel@gmail.com" },
            ],
          },
          {
            id: 8,
            label: "Tauhid_union",
            user: "tauhid@gmail.com",
            children: [
              { id: 9, label: "Riyad", user: "riyad@gmail.com" },
              { id: 10, label: "Nazmul", user: "nazmul@gmail.com" },
            ],
          },
        ],
      },
      "zisan@gmail.com": {
        id: 5,
        label: "Zisan",
        children: [
          { id: 6, label: "Faysal", user: "faysal@gmail.com" },
          { id: 7, label: "Jewel", user: "jewel@gmail.com" },
        ],
      },
      "tauhid@gmail.com": {
        id: 8,
        label: "Tauhid",
        children: [
          { id: 9, label: "Riyad", user: "riyad@gmail.com" },
          { id: 10, label: "Nazmul", user: "nazmul@gmail.com" },
        ],
      },
    };

    // Return the hierarchical structure based on the logged-in user
    if (user === "monir@gmail.com") {
      return [
        {
          id: 100,
          label: "Central Admin",
          children: [unions["monir@gmail.com"]],
        },
      ];
    } else if (user === "estiak@gmail.com") {
      return [
        {
          id: 101,
          label: "Division Admin",
          children: [unions["estiak@gmail.com"]],
        },
      ];
    } else if (user === "toyon@gmail.com") {
      return [
        {
          id: 102,
          label: "District Admin",
          children: [unions["toyon@gmail.com"]],
        },
      ];
    } else if (user === "rifat@gmail.com") {
      return [
        {
          id: 103,
          label: "Upozilla Admin",
          children: [unions["rifat@gmail.com"]],
        },
      ];
    } else if (user === "zisan@gmail.com") {
      return [
        {
          id: 104,
          label: "Union Admin",
          children: [unions["zisan@gmail.com"]],
        },
      ];
    } else if (user === "tauhid@gmail.com") {
      return [
        {
          id: 105,
          label: "Union Admin",
          children: [unions["tauhid@gmail.com"]],
        },
      ];
    } else {
      return []; // Return an empty array for unrecognized users
    }
  };

  const treeData = userEmail ? getFilteredTreeData(userEmail) : [];

  const renderTree = (nodes) => {
    if (!nodes || !Array.isArray(nodes)) return null;

    return nodes.map((node) => (
      <TreeItem
        key={node.id}
        itemId={node.id}
        label={node.label}
        onClick={() => {
          if (node?.user) {
            setSelectedUser(node.user);
          }
        }}
      >
        {Array.isArray(node.children) && renderTree(node.children)}
      </TreeItem>
    ));
  };

  return (
    <Stack spacing={2}>
      <Box sx={{ minHeight: 352, minWidth: 250 }}>
        {userEmail ? (
          <SimpleTreeView>{renderTree(treeData)}</SimpleTreeView>
        ) : (
          <p>Please log in to view your tree data.</p>
        )}
      </Box>
    </Stack>
  );
}
