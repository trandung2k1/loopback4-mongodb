import {MiddlewareSequence} from '@loopback/rest';

export class MySequence extends MiddlewareSequence {}
// import {
//   AuthenticateFn,
//   AUTHENTICATION_STRATEGY_NOT_FOUND,
//   AuthenticationBindings,
//   USER_PROFILE_NOT_FOUND,
// } from '@loopback/authentication';
// import {inject} from '@loopback/core';
// import {
//   FindRoute,
//   InvokeMethod,
//   ParseParams,
//   Reject,
//   RequestContext,
//   Send,
//   SequenceActions,
//   SequenceHandler,
// } from '@loopback/rest';
// export class MySequence implements SequenceHandler {
//   constructor(
//     @inject(SequenceActions.FIND_ROUTE) protected findRoute: FindRoute,
//     @inject(SequenceActions.PARSE_PARAMS)
//     protected parseParams: ParseParams,
//     @inject(SequenceActions.INVOKE_METHOD) protected invoke: InvokeMethod,
//     @inject(SequenceActions.SEND) protected send: Send,
//     @inject(SequenceActions.REJECT) protected reject: Reject,
//     @inject(AuthenticationBindings.AUTH_ACTION)
//     protected authenticateRequest: AuthenticateFn,
//   ) {}
//   async handle(context: RequestContext) {
//     try {
//       const {request, response} = context;
//       const route = this.findRoute(request);
//       //call authentication action
//       await this.authenticateRequest(request);
//       // Authentication successful, proceed to invoke controller
//       const args = await this.parseParams(request, route);
//       const result = await this.invoke(route, args);
//       this.send(response, result);
//     } catch (error) {
//       if (
//         error.code === AUTHENTICATION_STRATEGY_NOT_FOUND ||
//         error.code === USER_PROFILE_NOT_FOUND
//       ) {
//         Object.assign(error, {statusCode: 401 /* Unauthorized */});
//       }
//       this.reject(context, error);
//       return;
//     }
//   }
// }
