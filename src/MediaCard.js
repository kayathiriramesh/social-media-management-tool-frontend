import { Card, CardContent, Typography, CardActionArea, CardMedia } from '@mui/material';

export function MediaCard() {

  const mediaCards = [
    {
      imageSrc: "https://media.istockphoto.com/id/1367730543/vector/marketing-campaign-concept-digital-marketing-ideas-illustration.jpg?s=1024x1024&w=is&k=20&c=YW_kAZavBZMk3mQQzly2lggF1YkjZD8ef7iUei0bSCE=",
      name: "Accounts",
      desc: "To view a social accounts that will directly redirects into thier accounts ",
      href: "add_account"
    },
    {
      imageSrc: "https://media.istockphoto.com/id/491725533/photo/social-media.jpg?s=1024x1024&w=is&k=20&c=4EF4ckBb63IGxrZCz60ebAhfmCeNFjxIl9z7TusFuqc=",
      name: "Posts",
      desc: "To view a social accounts that will directly redirects into thier accounts ",
      href: "post"
    },
    
  ];

  return (
    <div className="mediaCards">
      {mediaCards.map(card => <div className="mediaCardFlex" onClick={() => window.location.href = card.href}>
        <Card sx={{ width: 450 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={card.imageSrc}
              alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.desc}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      )}

    </div>
  );
}
