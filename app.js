const express=require('express')
const mongoose=require('mongoose')
var cors=require('cors')
const app = express()

app.use(cors())

mongoose.connect('mongodb://localhost/finaldb',
{   
    useNewUrlParser:true, 
    useUnifiedTopology: true,
    })
const con=mongoose.connection


con.on('open', function()
{
    console.log('connected...')
}
)

app.use(express.json())

const leader=require('./routes/leader')
app.use('/leader',leader)

const escape=require('./routes/escape')
app.use('/escape',escape)

const u1=require('./routes/user1')
app.use('/user1',u1)

const u2=require('./routes/user2')
app.use('/user2',u2)

const s=require('./routes/starting')
app.use('/starting',s)

const f1=require('./routes/first1')
app.use('/f1',f1)

const f2=require('./routes/first2')
app.use('/f2',f2)

const f3=require('./routes/first3')
app.use('/f3',f3)

const s1=require('./routes/sec1')
app.use('/s1',s1)

const s2=require('./routes/sec2')
app.use('/s2',s2)

const s3=require('./routes/sec3')
app.use('/s3',s3)

const gt=require('./routes/gt')
app.use('/:id',gt)


app.listen(9000, function()
{
    console.log('Server Started')
})