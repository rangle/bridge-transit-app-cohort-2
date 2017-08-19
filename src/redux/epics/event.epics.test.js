import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { getEventEpic } from './event.epics';
import { ACTION_TYPES } from '../../constants/ActionTypes';

describe('event epics', () => {
    it('dispatches the correct action when it is successful', done => {
        const expectedOutputActionType = ACTION_TYPES.SET_EVENT;
        const ajax = () => Observable.of({
            response: {
                id: "27884283643"
            }
        });
        const action$ = ActionsObservable.of({
            type: ACTION_TYPES.GET_EVENT,
            payload: '27884283643'
        });

        getEventEpic(action$, null, {ajax})
            .subscribe( actualOutputAction => {
                expect(actualOutputAction.type).toEqual(expectedOutputActionType);
                expect(actualOutputAction.payload).toEqual({id: "27884283643"});
                done();
            });
    });

    it('dispatches the correct action when there is an error', done => {
        const expectedOutputActionType = ACTION_TYPES.SET_EVENT_INVALIDATE;
        const action$ = ActionsObservable.of({
            type: ACTION_TYPES.GET_EVENT,
            payload: 'bad_payload'
        });
        const ajax = () => Observable.throw({
           status: 404
        });

        getEventEpic(action$, null, {ajax})
            .subscribe(actualOutputAction => {
                expect(actualOutputAction.type).toEqual(expectedOutputActionType);
                done();
            });
    })
});