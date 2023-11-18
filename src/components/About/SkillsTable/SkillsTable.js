import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import 'components/About/SkillsTable/SkillsTable.css';
import { Styles } from 'utilities/constants/constants';
import { TechnicalSkills as technicalSkills } from 'utilities/data/technicalSkills';
import CustomChip from 'components/Shared/CustomChip/CustomChip';

const {
  FONT: { BOLD: bold },
  LETTER_SPACING: letterSpacing,
  SIZE: { BASE: baseSize, MOBILE: mobile, SPACING: spacing },
} = Styles;

const styles = {
  letterSpacing,
  padding: `16px ${spacing}`,
};

const HeadTableCell = styled(TableCell)({
  fontSize: '1rem',
  fontWeight: bold,
  ...styles,
});

const BodyTableCell = styled(TableCell)({
  fontSize: '0.93rem',
  ...styles,
});

const SkillsTable = () => {
  const showTechnology = (area) =>
    area.tool.map((skill) => (
      <CustomChip
        label={skill}
        color={area.color}
        otherStyles={{ fontSize: '0.87rem', margin: '4px' }}
        key={skill}
      />
    ));

  const showTechnicalSkills =
    technicalSkills &&
    Object.keys(technicalSkills).map((key) => (
      <TableRow key={key}>
        <BodyTableCell>{key}</BodyTableCell>
        <BodyTableCell sx={{ paddingLeft: 0 }}>
          {showTechnology(technicalSkills[key])}
        </BodyTableCell>
      </TableRow>
    ));

  return (
    <TableContainer
      component={Paper}
      elevation={3}
      sx={{ maxWidth: mobile, margin: 'auto', marginTop: baseSize }}
    >
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <HeadTableCell>Area</HeadTableCell>
            <HeadTableCell sx={{ paddingLeft: 0 }}>Stack</HeadTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{showTechnicalSkills}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default SkillsTable;
