const {execSync}=require('child_process');


try{
    execSync('mongo store --eval "db.dropDatabase()"');
    console.log('Dropped Database Store');

}catch(err){
    console.log('Some problems encountered when trying to drop database');
    console.log(err);
}