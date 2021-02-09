let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
var token;


chai.use(chaiHttp);
describe("Tasks Api", () => {
    describe("POST /api/user/register", () => {
        it("It should POST the NEW_USER",  (done) => {
            
            const task = {
            "name" :"ramachandran123",
            "password" : "ramachandran123@",
            "email" : "ramachandran@gmail.com"
                
            }
            chai.request(server)
                .post('/api/user/register')
                .send(task)
                .end((err, res,body) => {
                    res.should.have.status(200);
                    res.text.should.be.eql("Registered Successfully")
                done();
            })
        })
    })
    describe("POST /api/user/register", () => {
        it("It should POST the USER WITH SAME NAME",  (done) => {
            
            const task = {
            "name" :"ramachandran123",
            "password" : "ramachandran122",
            "email" : "ramachandran@gmail.com"
                
            }
            chai.request(server)
                .post('/api/user/register')
                .send(task)
                .end((err, res,body) => {
                    res.should.have.status(200);
                   res.text.should.be.eql("Name already exits")
                done();
            })
        })
    })
    describe("POST /api/user/register", () => {
        it("It should POST the NEW_USER WITH SAME EMAIL",  (done) => {
            
            const task = {
            "name" : "ramachandran1234",
            "password" : "skksnknsnsnysjnsppssshgskskjgu",
            "email" : "ramachandran@gmail.com"
                
            }
            chai.request(server)
                .post('/api/user/register')
                .send(task)
                .end((err, res,body) => {
                    res.should.have.status(200);
                   res.text.should.be.eql("Email already exits")
                done();
            })
        })
    })
    describe("POST /api/user/login", () => {
        it("It should POST the USER WITH USER_NAME INCORRECT Details",  (done) => {
            
            const task = {
                "name" :"ramachandran12386",
                "password" : "ramachandran122",
                "email" : "ramachandran@gmail.com"
                
            }
            chai.request(server)
                .post('/api/user/login')
                .send(task)
                .end((err, res,body) => {
                    res.should.have.status(200);
                   res.text.should.be.eql("User_name is incorrect")
                done();
            })
        })
    })
    describe("POST /api/user/login", () => {
        it("It should POST the USER WITH EMAIL INCORRECT Details",  (done) => {
            
            const task = {
                "name" :"ramachandran123",
                "password" : "ramachandran122",
                "email" : "ramachandran12@gmail.com"
                
            }
            chai.request(server)
                .post('/api/user/login')
                .send(task)
                .end((err, res,body) => {
                    res.should.have.status(200);
                   res.text.should.be.eql("Email is incorrect")
                done();
            })
        })
    })
    describe("POST /api/user/login", () => {
        it("It should POST the USER WITH PASSWORD INCORRECT Details",  (done) => {
            
            const task = {
                "name" :"ramachandran123",
                "password" : "ramachandran1223",
                "email" : "ramachandran@gmail.com"
                
            }
            chai.request(server)
                .post('/api/user/login')
                .send(task)
                .end((err, res,body) => {
                    res.should.have.status(200);
                   res.text.should.be.eql("Password is Incorrect")
                done();
            })
        })
    })

    describe("POST /api/user/login", () => {
        it("It should POST the USER WITH CORRECT Details",  (done) => {
            
            const task = {
            "name" :"ramachandran123",
            "password" : "ramachandran123@",
            "email" : "ramachandran@gmail.com"
                
            }
            chai.request(server)
                .post('/api/user/login')
                .send(task)
                .end((err, res,body) => {
                    res.should.have.status(200);
                    token = res.text;
                done();
            
            })
           
        })
    })
    
    describe("POST /api/post", () => {
        it("It should test the Private Route Post with out token ",  (done) => {
            
            chai.request(server)
                .get('/api/post')
                .end((err, res,body) => {
                    res.should.have.status(401);
                done();
            })
        })
    })
    describe("POST /api/post", () => {
        it("It should test the Private Route Post with token ",  (done) => {
            chai.request(server)
                .get('/api/post')
                .set({'Content-Type' : 'application/json' ,'auth-token' : token})
                .end((err, res,body) => {
                    res.should.have.status(200);
                    res.text.should.be.eql("Welcome to post page")
                    
                done();
            })
        })
    })
    

})
