import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { getEventsEpic } from '../../redux/epics/event.epics';
import { ACTION_TYPES } from '../../constants/ActionTypes';

describe('events epic', () => {
    it('dispatches the correct action when it is successful', done => {
        const expectedOutputActionType = ACTION_TYPES.SET_EVENTS;
        const ajax = () => Observable.of({
            response: [{
                category_id: 110
            }]
        });
        const action$ = ActionsObservable.of({
            type: ACTION_TYPES.GET_EVENTS,
            payload: '110'
        });

        getEventsEpic(action$, null, {ajax})
            .subscribe( actualOutputAction => {
                expect(actualOutputAction.type).toEqual(expectedOutputActionType);
                expect(actualOutputAction.payload[0]).toEqual({ category_id: 110});
                done();
            });
    });

    it('dispatches the correct action when there is an error', done => {
        const expectedOutputActionType = ACTION_TYPES.SET_EVENTS_INVALIDATE;
        const action$ = ActionsObservable.of({
            type: ACTION_TYPES.GET_EVENTS,
            payload: 'bad_payload'
        });
        const ajax = () => Observable.throw({
           status: 404
        });

        getEventsEpic(action$, null, {ajax})
            .subscribe(actualOutputAction => {
                expect(actualOutputAction.type).toEqual(expectedOutputActionType);
                done();
            });
    })
});