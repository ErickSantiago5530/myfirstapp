import React, { Component } from 'react';



export function getPosts() {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
}
