import git from '/public/svg/skills/git.svg';
import mysql from '/public/svg/skills/mysql.svg';
import numpy from '/public/svg/skills/numpy.svg';
import python from '/public/svg/skills/python.svg';

import anaconda from '/public/svg/skills/anaconda.png';
import excel from '/public/svg/skills/excel.png';
import tableau from '/public/svg/skills/tableau.png';
import matplotlib from '/public/svg/skills/matplotlib.svg';

import jp from '/public/svg/skills/jp.svg';
import powerbi from '/public/svg/skills/powerbi.png';
import seaborn from '/public/svg/skills/seaborn.svg';
import sql from '/public/svg/skills/sql.png';
import vscode from '/public/svg/skills/vscode.svg';
import github from '/public/svg/skills/github.png';
import pandas from '/public/svg/skills/pandas.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();

  switch (skillID) {
    case 'mysql':
      return mysql;
    case 'python':
      return python;
    case 'git':
      return git;
    case 'numpy':
      return numpy;
    case 'anaconda':
      return anaconda;
    case 'excel':
      return excel;
    case 'tableau':
      return tableau;
    case 'matplotlib':
      return matplotlib;
    case 'jupyter notebook':
    case 'jupyter':
    case 'jp':
      return jp;
    case 'powerbi':
    case 'power bi':
      return powerbi;
    case 'sql':
      return sql;
    case 'seaborn':
      return seaborn;
    case 'vscode':
    case 'vs code':
      return vscode;
    case 'github':
      return github;
    case 'pandas':
      return pandas;
    default:
      return null; // fallback option
  }
};
