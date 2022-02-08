import { ThemeProvider } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import theme from '../../../configuration/Theme/theme';
import { SearchInput } from './SearchInput';

export default {
    title:'Molecules/SearchInput',
    component:SearchInput
} as ComponentMeta<typeof SearchInput>;

const Template:ComponentStory<typeof SearchInput>=(args:any)=>(
    <ThemeProvider theme={theme}>
        <SearchInput/>
    </ThemeProvider>
);

export const SearchItem = Template.bind({});
