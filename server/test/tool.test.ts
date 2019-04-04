import { describe } from 'mocha'
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/server'

chai.use(chaiHttp)
chai.should()

describe('Tool', () => {
    describe('#create', () => {
        it('should create a tool', (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    expect(res).to.be.a('object')
                    expect(res.body).to.be.empty
                    expect(res.status).to.be.equal(404)
                    done()
                })
        })
    })

    describe('#update', () => {
        it('should update a tool', () => {

        })
    })

    describe('#remove', () => {
        it('should remove a tool', () => {

        })
    })

})
