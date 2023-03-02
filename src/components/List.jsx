import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import List from '@mui/material/List';
import React from 'react'
import "./list.css"

const Lists = () => {
  return (
    < >
     <List sx={{ width: '100%',height:"100%", maxWidth: 360, bgcolor: 'background.paper',display:"flex", flexDirection:"column"
      }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar
              alt="Remy Sharp"
              src="https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302_960_720.jpg"
            />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar
              alt="Travis Howard"
              src="https://cdn.pixabay.com/photo/2016/11/29/06/08/woman-1867715_960_720.jpg"
            />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar
              alt="Cindy Baker"
              src="https://cdn.pixabay.com/photo/2021/05/23/00/21/woman-6274879_960_720.png"
            />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar
              alt="Remy Sharp"
              src="https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302_960_720.jpg"
            />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar
              alt="Travis Howard"
              src="https://cdn.pixabay.com/photo/2016/11/29/06/08/woman-1867715_960_720.jpg"
            />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar
              alt="Cindy Baker"
              src="https://cdn.pixabay.com/photo/2021/05/23/00/21/woman-6274879_960_720.png"
            />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar
              alt="Remy Sharp"
              src="https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302_960_720.jpg"
            />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar
              alt="Travis Howard"
              src="https://cdn.pixabay.com/photo/2016/11/29/06/08/woman-1867715_960_720.jpg"
            />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar
              alt="Cindy Baker"
              src="https://cdn.pixabay.com/photo/2021/05/23/00/21/woman-6274879_960_720.png"
            />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar
              alt="Remy Sharp"
              src="https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302_960_720.jpg"
            />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar
              alt="Travis Howard"
              src="https://cdn.pixabay.com/photo/2016/11/29/06/08/woman-1867715_960_720.jpg"
            />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>

   
    </List>
    </>
  )
}

export default Lists