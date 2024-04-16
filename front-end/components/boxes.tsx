"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Boxes() {
  const items = [
    ["Course 1", "Course Descrp 1"],
    ["Course 2", "Course Descrp 2"],
    ["Course 3", "Course Descrp 3"],
    ["Course 4", "Course Descrp 4"],
  ];

  const router = useRouter();

  return (
    <div className="mt-48 flex flex-wrap gap-32 justify-center items-center">
      {items.map((item) => (
        <div key={item[0]}>
          <Card sx={{ maxWidth: 500, minHeight: 500 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="c1"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item[0]}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item[1]}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() =>
                  router.push(
                    `/courseDetails?courseId=${item[0]}&courseDesc=${item[1]}`
                  )
                }
              >
                Open
              </Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
}
