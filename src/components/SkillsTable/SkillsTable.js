import React from 'react';
import {
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import 'components/SkillsTable/SkillsTable.css';
import { TechnicalSkills as technicalSkills } from 'utilities/about';

const HeadTableCell = styled(TableCell)({
  fontSize: '16px',
  fontWeight: '600',
  letterSpacing: '1px',
});

const BodyTableCell = styled(TableCell)({
  fontSize: '14px',
  letterSpacing: '1px',
});

const SkillsTable = () => {
  const showTechnicalSkills =
    technicalSkills &&
    Object.keys(technicalSkills).map((key) => (
      <TableRow key={key}>
        <BodyTableCell>{key}</BodyTableCell>
        <BodyTableCell>
          {technicalSkills[key] &&
            Object.keys(technicalSkills[key]).map((skillKey) => (
              <Chip
                label={skillKey}
                variant='outlined'
                color={technicalSkills[key][skillKey]}
                sx={{
                  fontSize: '14px',
                  margin: '4px',
                  backgroundColor: '#F7F7F7',
                }}
                key={skillKey}
              />
            ))}
        </BodyTableCell>
      </TableRow>
    ));

  return (
    <TableContainer
      component={Paper}
      elevation={3}
      sx={{ maxWidth: '768px', margin: 'auto', marginTop: '64px' }}
    >
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <HeadTableCell>Area</HeadTableCell>
            <HeadTableCell>Stack</HeadTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{showTechnicalSkills}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default SkillsTable;
