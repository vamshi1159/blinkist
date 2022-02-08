export const GET_BOOKS='GET_BOOKS';
export type TYPE_GET_BOOKS=typeof GET_BOOKS;
export const GET_BOOK='GET_BOOK';
export type TYPE_GET_BOOK=typeof GET_BOOK;
export const GET_CURRENT_READINGS=' GET_CURRENT_READINGS';
export type TYPE_GET_CURRENT_READINGS=typeof GET_CURRENT_READINGS;
export const GET_FINISHED_READINGS='GET_FINISHED_READINGS';
export type TYPE_GET_FINISHED_READINGS=typeof GET_FINISHED_READINGS;
export const UPDATE_TO_READING='UPDATE_TO_READING';
export type TYPE_UPDATE_TO_READING=typeof UPDATE_TO_READING;
export const UPDATE_TO_FINISHED='UPDATE_TO_FINISHED';
export type TYPE_UPDATE_TO_FINISHED=typeof UPDATE_TO_FINISHED;
export const ADD_TO_LIBRARY='ADD_TO_LIBRARY';
export type TYPE_ADD_TO_LIBRARY=typeof ADD_TO_LIBRARY;
export interface Book {
    id?: number;
    title?: string;
    author?: string;
    category?: string;
    image?: string;
    status?: boolean;
    time?: string;
    isFinished?: boolean;
  }

export interface IState{
    books:Book[],
    book:Book
}