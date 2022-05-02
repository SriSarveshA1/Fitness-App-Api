module.exports={
        HOST: 'localhost',
        DB:'prac2',
        USER: 'root',
        PASSWORD: '3612',
        dialect: 'mysql',
        pool:{
            max:5,//max threads so only 5 connections can be established at a time
            min:0,
            acquire:30000,//maximum a connection establishment will try to establish within 30000 milli seconds
            idle:1000//connection if its idle for 1000 milli seconds without making any request then the connections establishment will be released
        }
    
}