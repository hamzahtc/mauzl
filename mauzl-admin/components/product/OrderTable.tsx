const orders = [
  {
    id: 1,
    status: "pending",
    totalAmount: "1393",
    createdAt: "2024-10-02T17:20:51.832Z",
    items: [
      {
        id: 1,
        name: "Jude Belli",
        price: "199",
        quantity: 3,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
      {
        id: 2,
        name: "Jude Belli",
        price: "199",
        quantity: 4,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "Hamza",
      lastName: "Hatoch",
      email: "hamzahatoch04@gmail.com",
      phoneNumber: "0683828271",
      address: {
        addressLine: "13, Bousejour",
        city: "Casablanca",
      },
    },
  },
  {
    id: 2,
    status: "pending",
    totalAmount: "1393",
    createdAt: "2024-10-02T17:41:58.434Z",
    items: [
      {
        id: 3,
        name: "Jude Belli",
        price: "199",
        quantity: 3,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
      {
        id: 4,
        name: "Jude Belli",
        price: "199",
        quantity: 4,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "Hamza",
      lastName: "Hatoch",
      email: "hamzahatoch04@gmail.com",
      phoneNumber: "0683828271",
      address: {
        addressLine: "13, Bousejour",
        city: "Casablanca",
      },
    },
  },
  {
    id: 3,
    status: "pending",
    totalAmount: "1393",
    createdAt: "2024-10-02T17:42:23.311Z",
    items: [
      {
        id: 5,
        name: "Jude Belli",
        price: "199",
        quantity: 3,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
      {
        id: 6,
        name: "Jude Belli",
        price: "199",
        quantity: 4,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "Hamza",
      lastName: "Hatoch",
      email: "hamzahatoch04@gmail.com",
      phoneNumber: "0683828271",
      address: {
        addressLine: "13, Bousejour",
        city: "Casablanca",
      },
    },
  },
  {
    id: 4,
    status: "pending",
    totalAmount: "1393",
    createdAt: "2024-10-02T17:58:53.088Z",
    items: [
      {
        id: 7,
        name: "Jude Belli",
        price: "199",
        quantity: 3,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
      {
        id: 8,
        name: "Jude Belli",
        price: "199",
        quantity: 4,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "Hamza",
      lastName: "Hatoch",
      email: "hamzahatoch04@gmail.com",
      phoneNumber: "0683828271",
      address: {
        addressLine: "13, Bousejour",
        city: "Casablanca",
      },
    },
  },
  {
    id: 5,
    status: "pending",
    totalAmount: "597",
    createdAt: "2024-10-02T20:12:29.793Z",
    items: [
      {
        id: 9,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
      {
        id: 10,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
      {
        id: 11,
        name: "James Rodriguez",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "Hamza",
      lastName: "Hatoch",
      email: "hamzahatoch04@gmail.com",
      phoneNumber: "0697633639",
      address: {
        addressLine: "Bouskoura",
        city: "Casablanca",
      },
    },
  },
  {
    id: 6,
    status: "pending",
    totalAmount: "597",
    createdAt: "2024-10-02T21:50:43.640Z",
    items: [
      {
        id: 12,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
      {
        id: 13,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
      {
        id: 14,
        name: "James Rodriguez",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "Hamza",
      lastName: "Hatoch",
      email: "hamzahatoch04@gmail.com",
      phoneNumber: "0697633639",
      address: {
        addressLine: "Bouskoura",
        city: "Marrakech",
      },
    },
  },
  {
    id: 7,
    status: "pending",
    totalAmount: "398",
    createdAt: "2024-10-02T22:10:18.677Z",
    items: [
      {
        id: 15,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
      {
        id: 16,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "Hamza",
      lastName: "Hatoch",
      email: "hamzahatoch04@gmail.com",
      phoneNumber: "0697633639",
      address: {
        addressLine: "Bouskoura",
        city: "Fès",
      },
    },
  },
  {
    id: 8,
    status: "pending",
    totalAmount: "199",
    createdAt: "2024-10-03T16:46:34.528Z",
    items: [
      {
        id: 17,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "Hamza",
      lastName: "Hatoch",
      email: "hamzahatoch04@gmail.com",
      phoneNumber: "0697633639",
      address: {
        addressLine: "Bouskoura",
        city: "Fès",
      },
    },
  },
  {
    id: 9,
    status: "pending",
    totalAmount: "199",
    createdAt: "2024-10-03T16:56:20.995Z",
    items: [
      {
        id: 18,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "Hamza",
      lastName: "Hatoch",
      email: "hamzahatoch04@gmail.com",
      phoneNumber: "0697633639",
      address: {
        addressLine: "Bouskoura",
        city: "Fès",
      },
    },
  },
  {
    id: 10,
    status: "pending",
    totalAmount: "199",
    createdAt: "2024-10-03T16:56:46.858Z",
    items: [
      {
        id: 19,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "Hamza",
      lastName: "Hatoch",
      email: "hamzahatoch04@gmail.com",
      phoneNumber: "0697633639",
      address: {
        addressLine: "Bouskoura",
        city: "Fès",
      },
    },
  },
  {
    id: 11,
    status: "pending",
    totalAmount: "199",
    createdAt: "2024-10-03T17:00:03.054Z",
    items: [
      {
        id: 20,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "Hamza",
      lastName: "Hatoch",
      email: "hamzahatoch04@gmail.com",
      phoneNumber: "0697633639",
      address: {
        addressLine: "Bouskoura",
        city: "",
      },
    },
  },
  {
    id: 12,
    status: "pending",
    totalAmount: "199",
    createdAt: "2024-10-03T17:00:36.692Z",
    items: [
      {
        id: 21,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "Hamza",
      lastName: "Hatoch",
      email: "hamzahatoch04@gmail.com",
      phoneNumber: "0697633639",
      address: {
        addressLine: "Bouskoura",
        city: "Fès",
      },
    },
  },
  {
    id: 13,
    status: "pending",
    totalAmount: "199",
    createdAt: "2024-10-03T17:03:32.716Z",
    items: [
      {
        id: 22,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "Hamza",
      lastName: "Hatoch",
      email: "hamzahatoch04@gmail.com",
      phoneNumber: "0697633639",
      address: {
        addressLine: "Bouskoura",
        city: "",
      },
    },
  },
  {
    id: 14,
    status: "pending",
    totalAmount: "199",
    createdAt: "2024-10-03T17:04:13.187Z",
    items: [
      {
        id: 23,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "Hamza",
      lastName: "Hatoch",
      email: "hamzahatoch04@gmail.com",
      phoneNumber: "0697633639",
      address: {
        addressLine: "Bouskoura",
        city: "Fès",
      },
    },
  },
  {
    id: 15,
    status: "pending",
    totalAmount: "199",
    createdAt: "2024-10-03T17:04:49.966Z",
    items: [
      {
        id: 24,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "Hamza",
      lastName: "Hatoch",
      email: "hamzahatoch04@gmail.com",
      phoneNumber: "0697633639",
      address: {
        addressLine: "Bouskoura",
        city: "Fès",
      },
    },
  },
  {
    id: 16,
    status: "pending",
    totalAmount: "199",
    createdAt: "2024-10-03T17:07:31.551Z",
    items: [
      {
        id: 25,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "Hamza",
      lastName: "Hatoch",
      email: "hamzahatoch04@gmail.com",
      phoneNumber: "0697633639",
      address: {
        addressLine: "Bouskoura",
        city: "Fès",
      },
    },
  },
  {
    id: 17,
    status: "pending",
    totalAmount: "199",
    createdAt: "2024-10-03T17:09:13.181Z",
    items: [
      {
        id: 26,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "Hamza",
      lastName: "Hatoch",
      email: "hamzahatoch04@gmail.com",
      phoneNumber: "0697633639",
      address: {
        addressLine: "Bouskoura",
        city: "Fès",
      },
    },
  },
  {
    id: 18,
    status: "pending",
    totalAmount: "199",
    createdAt: "2024-10-03T17:12:16.238Z",
    items: [
      {
        id: 27,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: {
        addressLine: "",
        city: "",
      },
    },
  },
  {
    id: 19,
    status: "pending",
    totalAmount: "199",
    createdAt: "2024-10-03T17:12:25.932Z",
    items: [
      {
        id: 28,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: {
        addressLine: "",
        city: "",
      },
    },
  },
  {
    id: 20,
    status: "pending",
    totalAmount: "199",
    createdAt: "2024-10-03T17:13:49.651Z",
    items: [
      {
        id: 29,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: {
        addressLine: "",
        city: "",
      },
    },
  },
  {
    id: 21,
    status: "pending",
    totalAmount: "199",
    createdAt: "2024-10-03T17:19:21.801Z",
    items: [
      {
        id: 30,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: {
        addressLine: "",
        city: "",
      },
    },
  },
  {
    id: 22,
    status: "pending",
    totalAmount: "199",
    createdAt: "2024-10-03T17:25:01.859Z",
    items: [
      {
        id: 31,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: {
        addressLine: "",
        city: "",
      },
    },
  },
  {
    id: 23,
    status: "pending",
    totalAmount: "199",
    createdAt: "2024-10-03T17:25:09.412Z",
    items: [
      {
        id: 32,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: {
        addressLine: "",
        city: "",
      },
    },
  },
  {
    id: 24,
    status: "pending",
    totalAmount: "199",
    createdAt: "2024-10-03T17:33:46.837Z",
    items: [
      {
        id: 33,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: {
        addressLine: "",
        city: "",
      },
    },
  },
  {
    id: 25,
    status: "pending",
    totalAmount: "199",
    createdAt: "2024-10-03T17:35:30.794Z",
    items: [
      {
        id: 34,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: {
        addressLine: "",
        city: "",
      },
    },
  },
  {
    id: 26,
    status: "pending",
    totalAmount: "199",
    createdAt: "2024-10-03T19:12:26.580Z",
    items: [
      {
        id: 35,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "Hamza",
      lastName: "Hatoch",
      email: "hamzahatoch04@gmail.com",
      phoneNumber: "0697633639",
      address: {
        addressLine: "Bouskoura",
        city: "Fès",
      },
    },
  },
  {
    id: 27,
    status: "pending",
    totalAmount: "398",
    createdAt: "2024-10-03T20:12:07.880Z",
    items: [
      {
        id: 36,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
      {
        id: 37,
        name: "Jude Belli",
        price: "199",
        quantity: 1,
        category: {
          id: 1,
          name: "Shoes",
        },
      },
    ],
    client: {
      firstName: "Hamza",
      lastName: "Hatoch",
      email: "hamzahatoch04@gmail.com",
      phoneNumber: "0697633639",
      address: {
        addressLine: "Bouskoura",
        city: "Fès",
      },
    },
  },
];

import React, { useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Collapse,
} from "@mui/material";
import DashboardCard from "../common/DashboardCard";

const OrderTable = () => {
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({});

  const handleToggleOpen = (id: number) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <DashboardCard title="Orders">
      <Box sx={{ overflow: "auto", width: { xs: "280px", md: "auto" } }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Client
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Status
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Total Amount
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  City
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Address
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle2" fontWeight={600}>
                  Date
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <React.Fragment key={order.id}>
                <TableRow hover onClick={() => handleToggleOpen(order.id)}>
                  <TableCell>
                    <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
                      {`${order.client.firstName} ${order.client.lastName}`}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      sx={{ px: "4px", backgroundColor: "gray", color: "#fff" }}
                      size="small"
                      label={order.status}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography
                      color="textSecondary"
                      variant="subtitle2"
                      fontWeight={400}
                    >
                      {`${order.totalAmount} MAD`}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">
                      {order.client.address.city}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">
                      {order.client.address.addressLine}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6">{order.createdAt}</Typography>
                  </TableCell>
                </TableRow>

                {expandedRows[order.id] && (
                  <TableRow>
                    <TableCell colSpan={5}>
                      <Collapse
                        in={expandedRows[order.id]}
                        timeout="auto"
                        unmountOnExit
                      >
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>Name</TableCell>
                              <TableCell>Category</TableCell>
                              <TableCell>Price</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {order.items.map((item) => (
                              <TableRow key={item.id}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>
                                  <Chip
                                    sx={{
                                      px: "4px",
                                      backgroundColor: "gray",
                                      color: "#fff",
                                    }}
                                    size="small"
                                    label={item.category.name}
                                  />
                                </TableCell>
                                <TableCell>{`${item.price} MAD`}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default OrderTable;
