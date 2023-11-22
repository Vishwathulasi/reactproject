import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
//import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Fundraisefor, Learnmore,Resources) {
  return { Fundraisefor,Learnmore,Resources };
}

const rows = [
    createData(<h1>Fundraiser</h1>,<h1>Learn more</h1>,<h1>resources</h1>),
  createData('Medical','How it works','Help centre'),
  createData('Emergency','Why this app','Blog'),
  createData('Memorial','Common questions','Stories'),
  createData('Education','Success Stories','Press centre'),
  createData('Non profit','Supported countries','careers'),
  createData('Support covid19 fundraisers','charity fundraising','About'),
  createData('Crisis relif','Pricing','More resources'),
];

export default function Footer() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {/* <TableHead>
          <TableRow>
            <TableCell >Fundraisefor</TableCell>
            <TableCell >Learnmore</TableCell>
            <TableCell>Resources</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.Fundraisefor}</TableCell>
              <TableCell >{row.Learnmore}</TableCell>
              <TableCell >{row.Resources}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}