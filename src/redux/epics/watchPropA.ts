import { ActionsObservable } from 'redux-observable';
import { Action } from 'redux';
import { filter, mapTo } from 'rxjs/operators';
import { RootState } from '../store';

const watchPropAEpic = (action$: ActionsObservable<Action<RootState>>) =>
    action$.pipe(
        filter((action: any) => action.type === 'counter/increasePropA'),
        mapTo({ type: 'counter/lul' })
    );

export default watchPropAEpic;
