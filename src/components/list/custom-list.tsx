import React from 'react';
import List from "@mui/material/List";
import CustomListItem from "../custom-list-item/custom-list-item";

const CustomList = () => {

    return (
        <List>
            <CustomListItem primaryName="ЗАЩИТА НАСЕЛЕНИЯ И ОБЪЕКТОВ НАРОДНОГО ХОЗЯЙСТВА ОТЧРЕЗВЫЧАЙНЫХ СИТУАЦИЙ"/>
            <CustomListItem primaryName="РАДИАЦИОННАЯ БЕЗОПАСНОСТЬ"/>
            <CustomListItem primaryName="ОСНОВЫ ЭКОЛОГИИ"/>
            <CustomListItem primaryName="ОСНОВЫ ЭНЕРГОСБЕРЕЖЕНИЯ"/>
            <CustomListItem primaryName="ОХРАНА ТРУДА"/>
        </List>
    );
};

export default CustomList;
