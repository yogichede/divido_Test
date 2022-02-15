
import lenders from 'constants/lenders';
import { NextPage } from 'next';
import {Card, CardContent, Link, Typography} from '@material-ui/core';


const HomePage: NextPage = () => {
  return (
    <>
    <Typography variant="h5" component="h5">
        fe-react-chg-ts
    </Typography>
      {lenders.map((lender) => (
        <Card variant="outlined" style={LenderStyle}>
      <CardContent>
      <Link data-testid={lender.slug} href={`/${lender.slug}`} style={{textDecoration: 'none'}}>
      {lender.name}
      </Link>
    </CardContent>
    </Card>
        ))}
    </>
  );
};

export default HomePage;

const LenderStyle: React.CSSProperties = {
  textAlign: 'center',
  display: 'block',
  width: '50%',
  margin: '2% 8%',
 textDecoration: 'none'
};
