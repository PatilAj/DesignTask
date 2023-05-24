import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import data from "../Users.json";
import './CardView.css';

const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  bgcolor: red[500],
}));

export default function RecipeReviewCard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(data.data.getAllProfiles.profiles);
  }, []);

  if (users.length === 0) {
    return null;
  }

  return (
    <div className="card-container">
      {users.map((user) => (
        <Card className="card" key={user.id}>
          <CardHeader
            avatar={<AvatarWrapper alt={user.first_name} src={user.image_url} />}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={`${user.first_name} ${user.last_name}`}
            subheader={user.email}
          />

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {user.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
