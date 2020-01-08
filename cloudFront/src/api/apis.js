import http from '../api/request'


export const getLocalList =()=> http.get('/search?keywords=海阔天空')

