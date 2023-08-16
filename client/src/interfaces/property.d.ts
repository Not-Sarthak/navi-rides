import { BaseKey } from "@refinedev/core";

export interface FormFieldProp {
    title: string;
    labelName: string;
}

export interface FormValues {
    title: string;
    description: string;
    name: string;
    number: string;
    date: string;
    propertyType: string;
    time: string;
    currency: string;
    location: string;
    price: number | undefined;
}

export interface PropertyCardProps {
    id?: BaseKey | undefined;
    title: string;
    name: string;
    time: string;
    min: string;
    date: string;
    number: string;
    location: string;
    dropLocation: string;
    currency: string;
    price: string;
    photo: string;
}