import mongoose from 'mongoose' 

const connect = async() => {
    try{
        const con = await mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})

        console.log(`MongoDB: ${con.connection.host}`)
    }catch (error){
        console.error('Error connecting to DB')
        process.exit(1)
    }
}

export default connect