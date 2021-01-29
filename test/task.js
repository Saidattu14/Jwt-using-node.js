let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();



chai.use(chaiHttp);
describe("Tasks Api", () => {
    describe("POST /api/user/register", () => {
        it("It should POST the NEW_USER",  (done) => {
            
            const task = {
            "name" :"skksknsoososisisnksjisjossskssissajoiiwjjjsisjioswisiiskntyffsiisiys1234",
            "password" : "skksnknsnsnysjnsppssshgskskjgujgisayssjsjsiiss",
            "email" : "njnkddikdlldkiinshjsknsiiisuiguisjsjssijasissiisissjjskkskssjsksl@gmail.com"
                
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
            "name" :"skksknsoososisisnksjisjossskssissajoiiwjjjsisjioswisiiskntyffsiisiys1234",
            "password" : "skksnknsnsnysjnsppssshgskskjgujgisayssjsjsiiss",
            "email" : "njnkddikdlldkiinshjsknsiiisuiguisjsjsssjijisjisijasisssjjskkskssjsksl@gmail.com"
                
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
    // describe("POST /api/user/register", () => {
    //     it("It should POST the NEW_USER WITH SAME EMAIL",  (done) => {
            
    //         const task = {
    //         "name" :"skksknsoososisisnksjisjossskssissajoiiwjjjsisjioswisiiskntyffsiisiys324",
    //         "password" : "skksnknsnsnysjnsppssshgskskjgujgisayssjsjsiiss",
    //         "email" : "njnkddikdlldkiinshjsknsiiisuiguisjsjssijasisssjjskkskssjsksl@gmail.com"
                
    //         }
    //         chai.request(server)
    //             .post('/api/user/register')
    //             .send(task)
    //             .end((err, res,body) => {
    //                 res.should.have.status(200);
    //                res.text.should.be.eql("Email already exits")
    //             done();
    //         })
    //     })
    // })
    

})
