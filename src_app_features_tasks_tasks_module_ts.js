"use strict";
(self["webpackChunktaskmanagement"] = self["webpackChunktaskmanagement"] || []).push([["src_app_features_tasks_tasks_module_ts"],{

/***/ 4588:
/*!**************************************************!*\
  !*** ./src/app/core/guards/task-exists.guard.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskExistsGuard: () => (/* binding */ TaskExistsGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/task.service */ 1489);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);





class TaskExistsGuard {
  constructor(tasks, router) {
    this.tasks = tasks;
    this.router = router;
  }
  canActivate(route, _state) {
    const id = route.paramMap.get('id');
    if (!id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.router.createUrlTree(['/tasks']));
    }
    return this.tasks.getTask(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(task => task ? true : this.router.createUrlTree(['/tasks'], {
      queryParams: {
        missing: id
      }
    })));
  }
  static {
    this.ɵfac = function TaskExistsGuard_Factory(t) {
      return new (t || TaskExistsGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_task_service__WEBPACK_IMPORTED_MODULE_0__.TaskService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: TaskExistsGuard,
      factory: TaskExistsGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1489:
/*!***********************************************!*\
  !*** ./src/app/core/services/task.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskService: () => (/* binding */ TaskService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4876);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6301);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5074);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);



const STORAGE_KEY = 'taskmanagement_tasks';
function newId() {
  return typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `t-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
const MOCK_USERS = [{
  id: 'u1',
  name: 'Alex Rivera',
  email: 'alex@example.com',
  role: 'Engineer',
  department: 'Platform'
}, {
  id: 'u2',
  name: 'Jordan Lee',
  email: 'jordan@example.com',
  role: 'Designer',
  department: 'Product'
}, {
  id: 'u3',
  name: 'Sam Patel',
  email: 'sam@example.com',
  role: 'Team Lead',
  department: 'Platform'
}, {
  id: 'u4',
  name: 'Taylor Chen',
  email: 'taylor@example.com',
  role: 'Analyst',
  department: 'Data'
}];
const SEED_TASKS = [{
  id: '1',
  title: 'API rate limiting',
  description: 'Implement token bucket limits on public endpoints.',
  assigneeId: 'u1',
  priority: 'High',
  status: 'In Progress',
  startDate: '2026-04-01',
  dueDate: '2026-05-15',
  createdAt: '2026-03-28T10:00:00.000Z'
}, {
  id: '2',
  title: 'Dashboard wireframes',
  description: 'Low-fidelity layouts for the analytics dashboard.',
  assigneeId: 'u2',
  priority: 'Medium',
  status: 'Pending',
  startDate: '2026-04-10',
  dueDate: '2026-04-30',
  createdAt: '2026-04-02T14:30:00.000Z'
}, {
  id: '3',
  title: 'Quarterly review deck',
  description: 'Slides for leadership with KPI summary.',
  assigneeId: 'u3',
  priority: 'Low',
  status: 'Completed',
  startDate: '2026-03-01',
  dueDate: '2026-03-20',
  createdAt: '2026-02-15T09:00:00.000Z'
}, {
  id: '4',
  title: 'Accessibility audit',
  description: 'WCAG 2.1 AA pass on checkout flow.',
  assigneeId: 'u2',
  priority: 'High',
  status: 'Pending',
  startDate: '2026-04-18',
  dueDate: '2026-05-01',
  createdAt: '2026-04-05T11:20:00.000Z'
}, {
  id: '5',
  title: 'Data pipeline monitoring',
  description: 'Alerts for failed Airflow DAG runs.',
  assigneeId: 'u4',
  priority: 'Medium',
  status: 'In Progress',
  startDate: '2026-04-12',
  dueDate: '2026-04-28',
  createdAt: '2026-04-06T08:45:00.000Z'
}, {
  id: '6',
  title: 'On-call runbook',
  description: 'Document escalation paths and rollback steps.',
  assigneeId: 'u3',
  priority: 'Low',
  status: 'Pending',
  startDate: '2026-04-20',
  dueDate: '2026-05-10',
  createdAt: '2026-04-08T16:00:00.000Z'
}];
const MOCK_ACTIVITIES = [{
  id: 'a1',
  taskId: '1',
  action: 'Task created',
  actorName: 'Sam Patel',
  at: '2026-03-28T10:00:00.000Z'
}, {
  id: 'a2',
  taskId: '1',
  action: 'Priority set to High',
  actorName: 'Sam Patel',
  at: '2026-03-28T10:05:00.000Z'
}, {
  id: 'a3',
  taskId: '1',
  action: 'Status changed to In Progress',
  actorName: 'Alex Rivera',
  at: '2026-04-01T09:00:00.000Z'
}, {
  id: 'a4',
  taskId: '2',
  action: 'Task created',
  actorName: 'Jordan Lee',
  at: '2026-04-02T14:30:00.000Z'
}, {
  id: 'a5',
  taskId: '3',
  action: 'Marked Completed',
  actorName: 'Sam Patel',
  at: '2026-03-19T17:00:00.000Z'
}];
class TaskService {
  constructor() {
    this.tasks$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.loadInitial());
    /** All tasks stream for list views (shareReplay avoids duplicate subscriptions). */
    this.allTasks$ = this.tasks$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
  }
  getUsers() {
    return MOCK_USERS;
  }
  getUserById(id) {
    return MOCK_USERS.find(u => u.id === id);
  }
  getActivities(taskId) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(MOCK_ACTIVITIES.filter(a => a.taskId === taskId)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(120));
  }
  getTask(id) {
    return this.tasks$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(tasks => tasks.find(t => t.id === id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(80));
  }
  /** Simulated save with occasional failure for error-handling demos. */
  saveTask(task) {
    const shouldFail = Math.random() < 0.08;
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(shouldFail ? 400 : 350).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => {
      if (shouldFail) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => new Error('Network error: could not save task. Please try again.'));
      }
      const now = new Date().toISOString();
      const list = [...this.tasks$.value];
      if (task.id) {
        const idx = list.findIndex(t => t.id === task.id);
        if (idx === -1) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => new Error('Task not found.'));
        }
        const updated = {
          ...list[idx],
          ...task,
          id: task.id,
          createdAt: list[idx].createdAt
        };
        list[idx] = updated;
        this.persist(list);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(updated);
      }
      const created = {
        ...task,
        id: newId(),
        createdAt: now
      };
      list.push(created);
      this.persist(list);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(created);
    }));
  }
  deleteTask(id) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(() => {
      const next = this.tasks$.value.filter(t => t.id !== id);
      this.persist(next);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => undefined));
  }
  loadInitial() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length) {
          return parsed;
        }
      }
    } catch {
      /* ignore */
    }
    return [...SEED_TASKS];
  }
  persist(tasks) {
    this.tasks$.next(tasks);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
      /* ignore */
    }
  }
  static {
    this.ɵfac = function TaskService_Factory(t) {
      return new (t || TaskService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
      token: TaskService,
      factory: TaskService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5436:
/*!*********************************************************!*\
  !*** ./src/app/core/validators/date-range.validator.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dueAfterStartValidator: () => (/* binding */ dueAfterStartValidator)
/* harmony export */ });
/** Ensures dueDate is on or after startDate when both are set. */
function dueAfterStartValidator(startKey, dueKey) {
  return group => {
    const start = group.get(startKey)?.value;
    const due = group.get(dueKey)?.value;
    if (!start || !due) {
      return null;
    }
    const s = new Date(start).getTime();
    const d = new Date(due).getTime();
    if (Number.isNaN(s) || Number.isNaN(d)) {
      return null;
    }
    return d < s ? {
      dateOrder: true
    } : null;
  };
}

/***/ }),

/***/ 7663:
/*!*********************************************************************!*\
  !*** ./src/app/features/tasks/task-detail/task-detail.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskDetailComponent: () => (/* binding */ TaskDetailComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9999);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_services_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/task.service */ 1489);
/* harmony import */ var _shared_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/confirm-dialog.service */ 8245);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/status-badge/status-badge.component */ 3787);








function TaskDetailComponent_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const err_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](err_r5);
  }
}
function TaskDetailComponent_ng_container_1_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Task not found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function TaskDetailComponent_ng_container_1_ng_container_3_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21)(1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const u_r13 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](u_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", u_r13.role, " \u00B7 ", u_r13.department, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", "mailto:" + u_r13.email, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](u_r13.email);
  }
}
function TaskDetailComponent_ng_container_1_ng_container_3_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No assignee on file.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function TaskDetailComponent_ng_container_1_ng_container_3_ul_48_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 28)(3, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const a_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](a_r15.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", a_r15.actorName, " \u00B7 ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 3, a_r15.at, "short"), "");
  }
}
function TaskDetailComponent_ng_container_1_ng_container_3_ul_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TaskDetailComponent_ng_container_1_ng_container_3_ul_48_li_1_Template, 8, 6, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const d_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", d_r6.activities);
  }
}
function TaskDetailComponent_ng_container_1_ng_container_3_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No activity recorded yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function TaskDetailComponent_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "header", 6)(2, "div")(3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u2190 Back to tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-status-badge", 9)(9, "app-status-badge", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 11)(11, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaskDetailComponent_ng_container_1_ng_container_3_Template_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const d_r6 = restoredCtx.ngIf;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.edit(d_r6.task.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaskDetailComponent_ng_container_1_ng_container_3_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const d_r6 = restoredCtx.ngIf;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.askDelete(d_r6.task));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "section", 14)(16, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "dl", 15)(19, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Due date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](32, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](37, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 16)(39, "section", 14)(40, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Assigned user");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, TaskDetailComponent_ng_container_1_ng_container_3_div_42_Template, 7, 5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, TaskDetailComponent_ng_container_1_ng_container_3_ng_template_43_Template, 2, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "section", 14)(46, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Activity history");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, TaskDetailComponent_ng_container_1_ng_container_3_ul_48_Template, 2, 1, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, TaskDetailComponent_ng_container_1_ng_container_3_ng_template_49_Template, 2, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const d_r6 = ctx.ngIf;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](44);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](50);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](d_r6.task.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", d_r6.task.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", d_r6.task.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r4.deleting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.deleting ? "Deleting\u2026" : "Delete", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](d_r6.task.description || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](27, 13, d_r6.task.startDate, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](32, 16, d_r6.task.dueDate, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](37, 19, d_r6.task.createdAt, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", d_r6.assignee)("ngIfElse", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", d_r6.activities.length)("ngIfElse", _r11);
  }
}
function TaskDetailComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TaskDetailComponent_ng_container_1_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TaskDetailComponent_ng_container_1_p_2_Template, 2, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TaskDetailComponent_ng_container_1_ng_container_3_Template, 51, 22, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.errorMessage(vm_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isMissing(vm_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.readyView(vm_r1));
  }
}
class TaskDetailComponent {
  constructor(route, router, tasks, confirm, cdr) {
    this.route = route;
    this.router = router;
    this.tasks = tasks;
    this.confirm = confirm;
    this.cdr = cdr;
    this.vm$ = this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(pm => pm.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(id => {
      if (!id) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
          state: 'missing'
        });
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this.tasks.getTask(id), this.tasks.getActivities(id)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(([task, activities]) => {
        if (!task) {
          return {
            state: 'missing'
          };
        }
        const assignee = this.tasks.getUserById(task.assigneeId);
        const data = {
          task,
          assignee,
          activities
        };
        return {
          state: 'ready',
          data
        };
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
        state: 'error',
        message: 'We could not load this task. Try again from the list.'
      })));
    }));
    this.deleting = false;
  }
  edit(id) {
    void this.router.navigate(['/tasks', id, 'edit']);
  }
  /** Template helpers so strict template typing can narrow view state. */
  errorMessage(vm) {
    return vm.state === 'error' ? vm.message : null;
  }
  readyView(vm) {
    return vm.state === 'ready' ? vm.data : null;
  }
  isMissing(vm) {
    return vm.state === 'missing';
  }
  askDelete(task) {
    this.confirm.confirm(`Delete “${task.title}”? This cannot be undone.`, 'Delete task').subscribe(ok => {
      if (!ok) {
        return;
      }
      this.deleting = true;
      this.cdr.markForCheck();
      this.tasks.deleteTask(task.id).subscribe({
        next: () => void this.router.navigate(['/tasks']),
        error: () => {
          this.deleting = false;
          this.cdr.markForCheck();
        },
        complete: () => {
          this.deleting = false;
          this.cdr.markForCheck();
        }
      });
    });
  }
  static {
    this.ɵfac = function TaskDetailComponent_Factory(t) {
      return new (t || TaskDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_task_service__WEBPACK_IMPORTED_MODULE_0__.TaskService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: TaskDetailComponent,
      selectors: [["app-task-detail"]],
      decls: 3,
      vars: 3,
      consts: [[1, "page"], [4, "ngIf"], ["class", "banner error", 4, "ngIf"], ["class", "muted", 4, "ngIf"], [1, "banner", "error"], [1, "muted"], [1, "page-header"], ["routerLink", "/tasks", 1, "back"], [1, "badges"], ["kind", "priority", 3, "value"], ["kind", "task-status", 3, "value"], [1, "header-actions"], ["type", "button", 1, "btn", "ghost", 3, "click"], ["type", "button", 1, "btn", "danger", 3, "disabled", "click"], [1, "card"], [1, "grid-dl"], [1, "layout-split"], ["class", "user-card", 4, "ngIf", "ngIfElse"], ["noUser", ""], ["class", "timeline", 4, "ngIf", "ngIfElse"], ["noAct", ""], [1, "user-card"], [1, "user-name"], [1, "user-meta"], [1, "link", 3, "href"], [1, "timeline"], [4, "ngFor", "ngForOf"], [1, "dot"], [1, "body"], [1, "action"], [1, "meta"]],
      template: function TaskDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TaskDetailComponent_ng_container_1_Template, 4, 3, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx.vm$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_2__.StatusBadgeComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
      styles: [".page[_ngcontent-%COMP%] {\n  max-width: 880px;\n  margin: 0 auto;\n  padding: 1.25rem 1.35rem 3rem;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1.25rem;\n  margin-bottom: 1.35rem;\n  padding: 1.15rem 1.25rem;\n  border-radius: var(--tm-radius-lg);\n  border: 1px solid var(--tm-border);\n  background: linear-gradient(125deg, #ffffff 0%, #f8fafc 55%, #eef2ff 100%);\n  box-shadow: var(--tm-shadow);\n}\n\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0.55rem;\n  font-size: clamp(1.35rem, 2.6vw, 1.85rem);\n  font-weight: 700;\n  letter-spacing: -0.025em;\n  line-height: 1.2;\n}\n\n.badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  align-items: flex-start;\n}\n\n.back[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: var(--tm-primary);\n  text-decoration: none;\n}\n\n.back[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--tm-surface);\n  border: 1px solid var(--tm-border);\n  border-radius: var(--tm-radius-lg);\n  box-shadow: var(--tm-shadow);\n  padding: 1.15rem 1.35rem 1.35rem;\n  margin-bottom: 1.1rem;\n}\n\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.85rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--tm-muted);\n}\n\n.banner.error[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-radius: var(--tm-radius);\n  margin-bottom: 1rem;\n  background: linear-gradient(180deg, #fef2f2 0%, #fee2e2 100%);\n  border: 1px solid #fecaca;\n  color: #991b1b;\n}\n\n.muted[_ngcontent-%COMP%] {\n  color: var(--tm-muted);\n}\n\n.grid-dl[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(120px, 180px) 1fr;\n  gap: 0.65rem 1.25rem;\n  margin: 0;\n}\n\n.grid-dl[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  color: var(--tm-muted);\n  font-size: 0.85rem;\n}\n\n.grid-dl[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n}\n\n.user-card[_ngcontent-%COMP%] {\n  padding: 1rem 1.1rem;\n  border-radius: var(--tm-radius);\n  border: 1px solid var(--tm-border);\n  background: linear-gradient(180deg, #ffffff 0%, var(--tm-surface-2) 100%);\n}\n\n.user-name[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-weight: 700;\n  font-size: 1.1rem;\n  letter-spacing: -0.02em;\n}\n\n.user-meta[_ngcontent-%COMP%] {\n  margin: 0 0 0.45rem;\n  color: var(--tm-muted);\n  font-size: 0.9rem;\n}\n\n.link[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--tm-primary);\n  text-decoration: none;\n}\n\n.link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.timeline[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 14px 1fr;\n  gap: 0.75rem;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid var(--tm-border);\n}\n\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-top: 0.35rem;\n  background: linear-gradient(180deg, #818cf8 0%, var(--tm-primary) 100%);\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);\n}\n\n.action[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n}\n\n.meta[_ngcontent-%COMP%] {\n  margin: 0.2rem 0 0;\n  font-size: 0.85rem;\n  color: var(--tm-muted);\n}\n\n@media (min-width: 720px) {\n  .layout-split[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 1.1rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvdGFza3MvdGFzay1kZXRhaWwvdGFzay1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLGtDQUFrQztFQUNsQyxrQ0FBa0M7RUFDbEMsMEVBQTBFO0VBQzFFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5Q0FBeUM7RUFDekMsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0Isa0NBQWtDO0VBQ2xDLGtDQUFrQztFQUNsQyw0QkFBNEI7RUFDNUIsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsNkRBQTZEO0VBQzdELHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtDQUErQztFQUMvQyxvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFDL0Isa0NBQWtDO0VBQ2xDLHlFQUF5RTtBQUMzRTs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUVBQXVFO0VBQ3ZFLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixXQUFXO0VBQ2I7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlIHtcbiAgbWF4LXdpZHRoOiA4ODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDEuMjVyZW0gMS4zNXJlbSAzcmVtO1xufVxuXG4ucGFnZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS4zNXJlbTtcbiAgcGFkZGluZzogMS4xNXJlbSAxLjI1cmVtO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS10bS1yYWRpdXMtbGcpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10bS1ib3JkZXIpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTI1ZGVnLCAjZmZmZmZmIDAlLCAjZjhmYWZjIDU1JSwgI2VlZjJmZiAxMDAlKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdG0tc2hhZG93KTtcbn1cblxuLnBhZ2UtaGVhZGVyIGgxIHtcbiAgbWFyZ2luOiAwLjM1cmVtIDAgMC41NXJlbTtcbiAgZm9udC1zaXplOiBjbGFtcCgxLjM1cmVtLCAyLjZ2dywgMS44NXJlbSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMjVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLmJhZGdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjRyZW07XG59XG5cbi5oZWFkZXItYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjVyZW07XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uYmFjayB7XG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRtLXByaW1hcnkpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5iYWNrOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10bS1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdG0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdG0tcmFkaXVzLWxnKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdG0tc2hhZG93KTtcbiAgcGFkZGluZzogMS4xNXJlbSAxLjM1cmVtIDEuMzVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuMXJlbTtcbn1cblxuLmNhcmQgaDIge1xuICBtYXJnaW46IDAgMCAwLjg1cmVtO1xuICBmb250LXNpemU6IDAuODJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS10bS1tdXRlZCk7XG59XG5cbi5iYW5uZXIuZXJyb3Ige1xuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRtLXJhZGl1cyk7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZWYyZjIgMCUsICNmZWUyZTIgMTAwJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZWNhY2E7XG4gIGNvbG9yOiAjOTkxYjFiO1xufVxuXG4ubXV0ZWQge1xuICBjb2xvcjogdmFyKC0tdG0tbXV0ZWQpO1xufVxuXG4uZ3JpZC1kbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDEyMHB4LCAxODBweCkgMWZyO1xuICBnYXA6IDAuNjVyZW0gMS4yNXJlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZ3JpZC1kbCBkdCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRtLW11dGVkKTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxuXG4uZ3JpZC1kbCBkZCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xufVxuXG4udXNlci1jYXJkIHtcbiAgcGFkZGluZzogMXJlbSAxLjFyZW07XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRtLXJhZGl1cyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRtLWJvcmRlcik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmZmZmYgMCUsIHZhcigtLXRtLXN1cmZhY2UtMikgMTAwJSk7XG59XG5cbi51c2VyLW5hbWUge1xuICBtYXJnaW46IDAgMCAwLjI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG59XG5cbi51c2VyLW1ldGEge1xuICBtYXJnaW46IDAgMCAwLjQ1cmVtO1xuICBjb2xvcjogdmFyKC0tdG0tbXV0ZWQpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmxpbmsge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdG0tcHJpbWFyeSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmxpbms6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnRpbWVsaW5lIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4udGltZWxpbmUgbGkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE0cHggMWZyO1xuICBnYXA6IDAuNzVyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW0gMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRtLWJvcmRlcik7XG59XG5cbi50aW1lbGluZSBsaTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmRvdCB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXRvcDogMC4zNXJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzgxOGNmOCAwJSwgdmFyKC0tdG0tcHJpbWFyeSkgMTAwJSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjE1KTtcbn1cblxuLmFjdGlvbiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1ldGEge1xuICBtYXJnaW46IDAuMnJlbSAwIDA7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgY29sb3I6IHZhcigtLXRtLW11dGVkKTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcyMHB4KSB7XG4gIC5sYXlvdXQtc3BsaXQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdhcDogMS4xcmVtO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 2039:
/*!*****************************************************************!*\
  !*** ./src/app/features/tasks/task-form/task-form.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskFormComponent: () => (/* binding */ TaskFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9475);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _core_validators_date_range_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/validators/date-range.validator */ 5436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/task.service */ 1489);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/form-field/form-field.component */ 6077);










function TaskFormComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.loadError);
  }
}
function TaskFormComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.saveError);
  }
}
function TaskFormComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Due date cannot be before the start date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function TaskFormComponent_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const u_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", u_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", u_r6.name, " \u2014 ", u_r6.department, "");
  }
}
function TaskFormComponent_option_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", p_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r7);
  }
}
function TaskFormComponent_option_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", s_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](s_r8);
  }
}
class TaskFormComponent {
  constructor(fb, route, router, tasks, cdr) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.tasks = tasks;
    this.cdr = cdr;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.priorities = ['High', 'Medium', 'Low'];
    this.statuses = ['Pending', 'In Progress', 'Completed'];
    this.form = this.fb.group({
      title: this.fb.nonNullable.control('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(120)]
      }),
      description: this.fb.nonNullable.control('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(2000)]
      }),
      assigneeId: this.fb.nonNullable.control('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }),
      priority: this.fb.nonNullable.control('Medium', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }),
      status: this.fb.nonNullable.control('Pending', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }),
      startDate: this.fb.nonNullable.control('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }),
      dueDate: this.fb.nonNullable.control('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      })
    }, {
      validators: (0,_core_validators_date_range_validator__WEBPACK_IMPORTED_MODULE_0__.dueAfterStartValidator)('startDate', 'dueDate')
    });
    this.taskId = null;
    this.pageTitle = 'New task';
    this.loadError = null;
    this.saveError = null;
    this.saving = false;
  }
  ngOnInit() {
    this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(pm => {
      const id = pm.get('id');
      this.taskId = id;
      this.loadError = null;
      if (!id) {
        this.pageTitle = 'New task';
        this.form.reset({
          title: '',
          description: '',
          assigneeId: '',
          priority: 'Medium',
          status: 'Pending',
          startDate: '',
          dueDate: ''
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(undefined);
      }
      this.pageTitle = 'Edit task';
      return this.tasks.getTask(id);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(task => {
      if (this.taskId && !task) {
        this.loadError = 'Could not load this task.';
      }
      if (task) {
        this.form.patchValue({
          title: task.title,
          description: task.description,
          assigneeId: task.assigneeId,
          priority: task.priority,
          status: task.status,
          startDate: task.startDate,
          dueDate: task.dueDate
        });
      }
      this.cdr.markForCheck();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  assignees() {
    return this.tasks.getUsers();
  }
  submit() {
    this.saveError = null;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
      this.cdr.markForCheck();
      return;
    }
    if (this.loadError) {
      return;
    }
    const v = this.form.getRawValue();
    this.saving = true;
    this.tasks.saveTask({
      id: this.taskId ?? undefined,
      title: v.title.trim(),
      description: v.description.trim(),
      assigneeId: v.assigneeId,
      priority: v.priority,
      status: v.status,
      startDate: v.startDate,
      dueDate: v.dueDate
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => {
      this.saving = false;
      this.cdr.markForCheck();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(err => {
      this.saveError = err.message ?? 'Something went wrong while saving.';
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null);
    })).subscribe(saved => {
      if (saved) {
        void this.router.navigate(['/tasks', saved.id]);
      }
    });
  }
  cancel() {
    void this.router.navigate(['/tasks']);
  }
  static {
    this.ɵfac = function TaskFormComponent_Factory(t) {
      return new (t || TaskFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_task_service__WEBPACK_IMPORTED_MODULE_1__.TaskService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: TaskFormComponent,
      selectors: [["app-task-form"]],
      decls: 56,
      vars: 19,
      consts: [[1, "page"], [1, "page-header"], ["routerLink", "/tasks", 1, "back"], [1, "eyebrow"], [1, "lede"], ["class", "banner error", "role", "alert", 4, "ngIf"], ["novalidate", "", 1, "card", "form", 3, "formGroup", "ngSubmit"], [1, "form-section"], [1, "section-title"], [1, "section-hint"], ["label", "Task title", 3, "control"], ["type", "text", "formControlName", "title", "autocomplete", "off", "placeholder", "Short, action-oriented title"], ["label", "Description", "hint", "Optional context for assignees.", 3, "control"], ["formControlName", "description", "rows", "4", "placeholder", "Scope, links, acceptance criteria\u2026"], ["label", "Assigned to", 3, "control"], ["formControlName", "assigneeId"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "grid-2"], ["label", "Priority", 3, "control"], ["formControlName", "priority"], ["label", "Status", 3, "control"], ["formControlName", "status"], ["label", "Start date", 3, "control"], ["type", "date", "formControlName", "startDate"], ["label", "Due date", 3, "control"], ["type", "date", "formControlName", "dueDate"], [1, "actions"], ["type", "button", 1, "btn", "ghost", 3, "disabled", "click"], ["type", "submit", 1, "btn", "primary", 3, "disabled"], ["role", "alert", 1, "banner", "error"], [3, "value"]],
      template: function TaskFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div")(3, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u2190 Back to tasks");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "All fields use reactive validation. Dates are checked so due is never before start.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, TaskFormComponent_div_11_Template, 2, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, TaskFormComponent_div_12_Template, 2, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, TaskFormComponent_div_13_Template, 2, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "form", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function TaskFormComponent_Template_form_ngSubmit_14_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "section", 7)(16, "h2", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Basics");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Title and context people will see in the list and detail views.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "app-form-field", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "app-form-field", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "textarea", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "section", 7)(25, "h2", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Ownership & workflow");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Who owns delivery and where it sits in your pipeline.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "app-form-field", 14)(30, "select", 15)(31, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Select a person or team lead");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, TaskFormComponent_option_33_Template, 2, 3, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 18)(35, "app-form-field", 19)(36, "select", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, TaskFormComponent_option_37_Template, 2, 2, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "app-form-field", 21)(39, "select", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, TaskFormComponent_option_40_Template, 2, 2, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "section", 7)(42, "h2", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Schedule");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Start and due dates drive ordering and validation together.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 18)(47, "app-form-field", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "app-form-field", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 27)(52, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaskFormComponent_Template_button_click_52_listener() {
            return ctx.cancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.taskId ? "Edit" : "Create");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.pageTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loadError);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.saveError);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.form.errors == null ? null : ctx.form.errors["dateOrder"]) && ctx.form.touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("control", ctx.form.controls.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("control", ctx.form.controls.description);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("control", ctx.form.controls.assigneeId);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.assignees());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("control", ctx.form.controls.priority);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.priorities);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("control", ctx.form.controls.status);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.statuses);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("control", ctx.form.controls.startDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("control", ctx.form.controls.dueDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.saving);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.saving);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.saving ? "Saving\u2026" : "Save task", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _shared_components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__.FormFieldComponent, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink],
      styles: [".page[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 1.25rem 1.35rem 3rem;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0.4rem;\n  font-size: clamp(1.35rem, 2.4vw, 1.65rem);\n  font-weight: 700;\n  letter-spacing: -0.02em;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--tm-accent);\n}\n\n.lede[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 48ch;\n  color: var(--tm-muted);\n  font-size: 0.92rem;\n  line-height: 1.55;\n}\n\n.back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.65rem;\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: var(--tm-primary);\n  text-decoration: none;\n}\n\n.back[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.banner[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-radius: var(--tm-radius);\n  margin-bottom: 1rem;\n  font-size: 0.9rem;\n}\n\n.banner.error[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #fef2f2 0%, #fee2e2 100%);\n  border: 1px solid #fecaca;\n  color: #991b1b;\n}\n\n.form[_ngcontent-%COMP%] {\n  padding: 0.25rem 0 0.25rem;\n  border-radius: var(--tm-radius-lg);\n  box-shadow: var(--tm-shadow);\n}\n\n.form-section[_ngcontent-%COMP%] {\n  padding: 1.15rem 1.35rem 1.35rem;\n  border-bottom: 1px solid var(--tm-border);\n}\n\n.form-section[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 0.95rem;\n  font-weight: 700;\n}\n\n.section-hint[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: 0.82rem;\n  color: var(--tm-muted);\n  line-height: 1.45;\n}\n\n.form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:is(input, select[_ngcontent-%COMP%], textarea)[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.6rem 0.75rem;\n  border-radius: 10px;\n  border: 1px solid var(--tm-border);\n  font: inherit;\n  font-size: 0.95rem;\n  background: #fff;\n  color: var(--tm-text);\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n\n.form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:is(input, select[_ngcontent-%COMP%], textarea)[_ngcontent-%COMP%]:hover {\n  border-color: var(--tm-border-strong);\n}\n\n.form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:is(input, select[_ngcontent-%COMP%], textarea)[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  border-color: var(--tm-primary);\n  box-shadow: 0 0 0 3px var(--tm-focus);\n}\n\n.form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 6rem;\n}\n\n.grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 0 1rem;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 0.5rem;\n  padding: 1rem 1.35rem 1.35rem;\n  background: var(--tm-surface-2);\n  border-top: 1px solid var(--tm-border);\n  border-radius: 0 0 var(--tm-radius-lg) var(--tm-radius-lg);\n}\n\n@media (max-width: 560px) {\n  .actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvdGFza3MvdGFzay1mb3JtL3Rhc2stZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIseUNBQXlDO0VBQ3pDLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixrQ0FBa0M7RUFDbEMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQiwwREFBMEQ7QUFDNUQ7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsK0JBQStCO0VBQy9CLHNDQUFzQztFQUN0QywwREFBMEQ7QUFDNUQ7O0FBRUE7RUFDRTtJQUNFLE9BQU87SUFDUCx1QkFBdUI7RUFDekI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlIHtcbiAgbWF4LXdpZHRoOiA3MjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDEuMjVyZW0gMS4zNXJlbSAzcmVtO1xufVxuXG4ucGFnZS1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuXG4ucGFnZS1oZWFkZXIgaDEge1xuICBtYXJnaW46IDAuMzVyZW0gMCAwLjRyZW07XG4gIGZvbnQtc2l6ZTogY2xhbXAoMS4zNXJlbSwgMi40dncsIDEuNjVyZW0pO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbn1cblxuLmV5ZWJyb3cge1xuICBtYXJnaW46IDAgMCAwLjI1cmVtO1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjEyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS10bS1hY2NlbnQpO1xufVxuXG4ubGVkZSB7XG4gIG1hcmdpbjogMDtcbiAgbWF4LXdpZHRoOiA0OGNoO1xuICBjb2xvcjogdmFyKC0tdG0tbXV0ZWQpO1xuICBmb250LXNpemU6IDAuOTJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU1O1xufVxuXG4uYmFjayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMC42NXJlbTtcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdG0tcHJpbWFyeSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJhY2s6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmJhbm5lciB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdG0tcmFkaXVzKTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5iYW5uZXIuZXJyb3Ige1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmVmMmYyIDAlLCAjZmVlMmUyIDEwMCUpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmVjYWNhO1xuICBjb2xvcjogIzk5MWIxYjtcbn1cblxuLmZvcm0ge1xuICBwYWRkaW5nOiAwLjI1cmVtIDAgMC4yNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdG0tcmFkaXVzLWxnKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdG0tc2hhZG93KTtcbn1cblxuLmZvcm0tc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDEuMTVyZW0gMS4zNXJlbSAxLjM1cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdG0tYm9yZGVyKTtcbn1cblxuLmZvcm0tc2VjdGlvbjpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIG1hcmdpbjogMCAwIDAuMzVyZW07XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnNlY3Rpb24taGludCB7XG4gIG1hcmdpbjogMCAwIDFyZW07XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgY29sb3I6IHZhcigtLXRtLW11dGVkKTtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG59XG5cbi5mb3JtIDppcyhpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSkge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC42cmVtIDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRtLWJvcmRlcik7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6IHZhcigtLXRtLXRleHQpO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZSwgYm94LXNoYWRvdyAwLjE1cyBlYXNlO1xufVxuXG4uZm9ybSA6aXMoaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEpOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10bS1ib3JkZXItc3Ryb25nKTtcbn1cblxuLmZvcm0gOmlzKGlucHV0LCBzZWxlY3QsIHRleHRhcmVhKTpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10bS1wcmltYXJ5KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLXRtLWZvY3VzKTtcbn1cblxuLmZvcm0gdGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBtaW4taGVpZ2h0OiA2cmVtO1xufVxuXG4uZ3JpZC0yIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gIGdhcDogMCAxcmVtO1xufVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAwLjVyZW07XG4gIHBhZGRpbmc6IDFyZW0gMS4zNXJlbSAxLjM1cmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10bS1zdXJmYWNlLTIpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tdG0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLXRtLXJhZGl1cy1sZykgdmFyKC0tdG0tcmFkaXVzLWxnKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5hY3Rpb25zIC5idG4ge1xuICAgIGZsZXg6IDE7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 7259:
/*!*****************************************************************!*\
  !*** ./src/app/features/tasks/task-list/task-list.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskListComponent: () => (/* binding */ TaskListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9999);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/task.service */ 1489);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/data-table/data-table.component */ 4901);








function TaskListComponent_section_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 31)(1, "article", 32)(2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Matching");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "article", 35)(7, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "article", 36)(12, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "In progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "article", 37)(17, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.stats.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.stats.pending);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.stats.inProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.stats.completed);
  }
}
function TaskListComponent_option_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const u_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", u_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](u_r3.name);
  }
}
function TaskListComponent_span_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r2.totalFiltered, " shown");
  }
}
class TaskListComponent {
  constructor(tasks, fb, router, cdr) {
    this.tasks = tasks;
    this.fb = fb;
    this.router = router;
    this.cdr = cdr;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.filtered = [];
    this.columns = [{
      key: 'title',
      label: 'Task Title',
      sortable: true,
      type: 'text'
    }, {
      key: 'assigneeName',
      label: 'Assigned To',
      sortable: true,
      type: 'text'
    }, {
      key: 'priority',
      label: 'Priority',
      sortable: true,
      type: 'priority'
    }, {
      key: 'status',
      label: 'Status',
      sortable: true,
      type: 'status'
    }, {
      key: 'dueDate',
      label: 'Due Date',
      sortable: true,
      type: 'date'
    }, {
      key: 'createdAt',
      label: 'Created Date',
      sortable: true,
      type: 'date'
    }];
    this.filterForm = this.fb.nonNullable.group({
      search: '',
      assignee: '',
      status: ''
    });
    this.tableRows = [];
    this.stats = {
      total: 0,
      pending: 0,
      inProgress: 0,
      completed: 0
    };
    this.totalFiltered = 0;
    this.page = 1;
    this.pageSize = 5;
    this.sortColumn = 'createdAt';
    this.sortDirection = 'desc';
    this.loading = true;
  }
  ngOnInit() {
    const search$ = this.filterForm.controls.search.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(this.filterForm.controls.search.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(280), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)());
    const assignee$ = this.filterForm.controls.assignee.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(this.filterForm.controls.assignee.value));
    const status$ = this.filterForm.controls.status.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(this.filterForm.controls.status.value));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this.tasks.allTasks$, search$, assignee$, status$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([taskList, search, assignee, status]) => this.applyFilters(taskList, search, assignee, status)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(filtered => {
      this.loading = false;
      this.filtered = filtered;
      this.page = 1;
      this.rebuildTable();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  assigneeOptions() {
    return this.tasks.getUsers().map(u => ({
      id: u.id,
      name: u.name
    }));
  }
  onSort(event) {
    this.sortColumn = event.column;
    this.sortDirection = event.direction;
    this.rebuildTable();
  }
  onPageChange(p) {
    this.page = p;
    this.rebuildTable();
  }
  openRow(row) {
    const id = row['id'];
    if (typeof id === 'string') {
      void this.router.navigate(['/tasks', id]);
    }
  }
  totalPages() {
    return Math.max(1, Math.ceil(this.totalFiltered / this.pageSize));
  }
  rebuildTable() {
    this.totalFiltered = this.filtered.length;
    this.stats = this.computeStats(this.filtered);
    if (this.page > this.totalPages()) {
      this.page = 1;
    }
    const sorted = this.sortTasks(this.filtered, this.sortColumn, this.sortDirection);
    const start = (this.page - 1) * this.pageSize;
    this.tableRows = sorted.slice(start, start + this.pageSize).map(t => this.toRow(t));
    this.cdr.markForCheck();
  }
  computeStats(tasks) {
    let pending = 0;
    let inProgress = 0;
    let completed = 0;
    for (const t of tasks) {
      if (t.status === 'Pending') {
        pending += 1;
      } else if (t.status === 'In Progress') {
        inProgress += 1;
      } else if (t.status === 'Completed') {
        completed += 1;
      }
    }
    return {
      total: tasks.length,
      pending,
      inProgress,
      completed
    };
  }
  applyFilters(taskList, search, assignee, status) {
    const q = search.trim().toLowerCase();
    return taskList.filter(t => {
      if (q && !t.title.toLowerCase().includes(q)) {
        return false;
      }
      if (assignee && t.assigneeId !== assignee) {
        return false;
      }
      if (status && t.status !== status) {
        return false;
      }
      return true;
    });
  }
  sortTasks(list, column, direction) {
    if (!column) {
      return [...list];
    }
    const dir = direction === 'asc' ? 1 : -1;
    const copy = [...list];
    copy.sort((a, b) => {
      const va = this.sortValue(a, column);
      const vb = this.sortValue(b, column);
      if (va < vb) {
        return -1 * dir;
      }
      if (va > vb) {
        return 1 * dir;
      }
      return 0;
    });
    return copy;
  }
  sortValue(task, column) {
    if (column === 'assigneeName') {
      return this.tasks.getUserById(task.assigneeId)?.name ?? '';
    }
    const v = task[column];
    if (v == null) {
      return '';
    }
    if (column === 'dueDate' || column === 'createdAt' || column === 'startDate') {
      return new Date(String(v)).getTime();
    }
    return String(v).toLowerCase();
  }
  toRow(task) {
    return {
      id: task.id,
      title: task.title,
      assigneeName: this.tasks.getUserById(task.assigneeId)?.name ?? '—',
      priority: task.priority,
      status: task.status,
      dueDate: task.dueDate,
      createdAt: task.createdAt
    };
  }
  static {
    this.ɵfac = function TaskListComponent_Factory(t) {
      return new (t || TaskListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_task_service__WEBPACK_IMPORTED_MODULE_0__.TaskService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: TaskListComponent,
      selectors: [["app-task-list"]],
      decls: 53,
      vars: 15,
      consts: [[1, "page"], [1, "page-header"], [1, "page-header-text"], [1, "eyebrow"], [1, "lede"], ["routerLink", "/tasks/new", 1, "btn", "primary", "btn-add"], ["aria-hidden", "true", 1, "btn-add-icon"], ["class", "stats", "aria-label", "Filtered task summary", 4, "ngIf"], [1, "card", "filters", 3, "formGroup"], [1, "filters-head"], [1, "filters-title"], [1, "filters-hint"], [1, "filters-grid"], [1, "field"], ["for", "q"], ["id", "q", "type", "search", "formControlName", "search", "placeholder", "e.g. dashboard, API\u2026"], ["for", "assignee"], ["id", "assignee", "formControlName", "assignee"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "status"], ["id", "status", "formControlName", "status"], ["value", "Pending"], ["value", "In Progress"], ["value", "Completed"], [1, "card", "table-card"], [1, "table-toolbar"], [1, "table-title"], [1, "table-sub"], ["class", "table-count", 4, "ngIf"], ["emptyMessage", "No tasks match your filters.", 3, "columns", "rows", "sortColumn", "sortDirection", "page", "pageSize", "totalItems", "loading", "sortChange", "pageChange", "rowActivate"], ["aria-label", "Filtered task summary", 1, "stats"], [1, "stat", "stat-total"], [1, "stat-value"], [1, "stat-label"], [1, "stat", "stat-pending"], [1, "stat", "stat-active"], [1, "stat", "stat-done"], [3, "value"], [1, "table-count"]],
      template: function TaskListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Workspace");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Tasks");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Search by title, narrow by assignee or status, then open a row for the full record.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 5)(10, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "+");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Add task ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, TaskListComponent_section_13_Template, 21, 4, "section", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "section", 8)(15, "div", 9)(16, "h2", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Filters");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Updates apply instantly; search waits briefly while you type.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12)(21, "div", 13)(22, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Search by title");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 13)(26, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Assignee");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "select", 17)(29, "option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "All assignees");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, TaskListComponent_option_31_Template, 2, 2, "option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 13)(33, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "select", 21)(36, "option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "All statuses");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "option", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "In Progress");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "option", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Completed");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "section", 25)(45, "div", 26)(46, "div")(47, "h2", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Task queue");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, TaskListComponent_span_51_Template, 2, 1, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "app-data-table", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sortChange", function TaskListComponent_Template_app_data_table_sortChange_52_listener($event) {
            return ctx.onSort($event);
          })("pageChange", function TaskListComponent_Template_app_data_table_pageChange_52_listener($event) {
            return ctx.onPageChange($event);
          })("rowActivate", function TaskListComponent_Template_app_data_table_rowActivate_52_listener($event) {
            return ctx.openRow($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.filterForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.assigneeOptions());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" Page ", ctx.page, " of ", ctx.totalPages(), " \u00B7 ", ctx.pageSize, " per page ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.totalFiltered > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx.columns)("rows", ctx.tableRows)("sortColumn", ctx.sortColumn)("sortDirection", ctx.sortDirection)("page", ctx.page)("pageSize", ctx.pageSize)("totalItems", ctx.totalFiltered)("loading", ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _shared_components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_1__.DataTableComponent, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink],
      styles: [".page[_ngcontent-%COMP%] {\n  max-width: 1120px;\n  margin: 0 auto;\n  padding: 1.25rem 1.35rem 3rem;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1.25rem;\n  margin-bottom: 1.5rem;\n}\n\n.page-header-text[_ngcontent-%COMP%] {\n  max-width: min(52ch, 100%);\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--tm-accent);\n}\n\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.4rem;\n  font-size: clamp(1.5rem, 2.8vw, 2rem);\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  line-height: 1.15;\n}\n\n.lede[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--tm-muted);\n  font-size: 0.95rem;\n  line-height: 1.55;\n}\n\n.btn-add[_ngcontent-%COMP%] {\n  align-self: center;\n  box-shadow: var(--tm-glow);\n}\n\n.btn-add-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 1.25rem;\n  height: 1.25rem;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  line-height: 1;\n  opacity: 0.95;\n}\n\n.stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n}\n\n.stat[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 1rem 1.1rem;\n  border-radius: var(--tm-radius);\n  border: 1px solid var(--tm-border);\n  background: linear-gradient(145deg, var(--tm-surface) 0%, var(--tm-surface-2) 100%);\n  box-shadow: var(--tm-shadow);\n}\n\n.stat[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  inset: 0 auto 0 0;\n  width: 3px;\n  border-radius: 3px 0 0 3px;\n  background: var(--tm-border-strong);\n}\n\n.stat-total[_ngcontent-%COMP%]::after {\n  background: linear-gradient(180deg, var(--tm-primary), var(--tm-accent));\n}\n\n.stat-pending[_ngcontent-%COMP%]::after {\n  background: #94a3b8;\n}\n\n.stat-active[_ngcontent-%COMP%]::after {\n  background: #3b82f6;\n}\n\n.stat-done[_ngcontent-%COMP%]::after {\n  background: #10b981;\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.65rem;\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  line-height: 1.1;\n  color: var(--tm-text);\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--tm-muted);\n}\n\n.card[_ngcontent-%COMP%] {\n  background: var(--tm-surface);\n  border: 1px solid var(--tm-border);\n  border-radius: var(--tm-radius-lg);\n  box-shadow: var(--tm-shadow);\n  padding: 1rem 1.15rem;\n  margin-bottom: 1.1rem;\n}\n\n.filters[_ngcontent-%COMP%] {\n  padding: 1.15rem 1.25rem 1.25rem;\n}\n\n.filters-head[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding-bottom: 0.85rem;\n  border-bottom: 1px solid var(--tm-border);\n}\n\n.filters-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 0.95rem;\n  font-weight: 700;\n}\n\n.filters-hint[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.82rem;\n  color: var(--tm-muted);\n}\n\n.filters-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 0.9rem 1.1rem;\n}\n\n.filters[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n\n.filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  color: var(--tm-muted);\n}\n\n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.55rem 0.7rem;\n  border-radius: 10px;\n  border: 1px solid var(--tm-border);\n  font: inherit;\n  background: #fff;\n  color: var(--tm-text);\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n\n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover, .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover {\n  border-color: var(--tm-border-strong);\n}\n\n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible, .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  border-color: var(--tm-primary);\n  box-shadow: 0 0 0 3px var(--tm-focus);\n}\n\n.table-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n\n.table-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 0.75rem 1rem;\n  padding: 1rem 1.2rem;\n  background: linear-gradient(180deg, var(--tm-surface-2) 0%, var(--tm-surface) 100%);\n  border-bottom: 1px solid var(--tm-border);\n}\n\n.table-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.2rem;\n  font-size: 1rem;\n  font-weight: 700;\n}\n\n.table-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.82rem;\n  color: var(--tm-muted);\n}\n\n.table-count[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--tm-accent);\n  padding: 0.35rem 0.65rem;\n  border-radius: 999px;\n  background: rgba(99, 102, 241, 0.12);\n  border: 1px solid rgba(99, 102, 241, 0.35);\n}\n\n.table-card[_ngcontent-%COMP%]   app-data-table[_ngcontent-%COMP%] {\n  display: block;\n}\n\n@media (max-width: 640px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 1rem 1rem 2.5rem;\n  }\n\n  .btn-add[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvdGFza3MvdGFzay1saXN0L3Rhc2stbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsK0JBQStCO0VBQy9CLGtDQUFrQztFQUNsQyxtRkFBbUY7RUFDbkYsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSx3RUFBd0U7QUFDMUU7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isa0NBQWtDO0VBQ2xDLGtDQUFrQztFQUNsQyw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsMERBQTBEO0FBQzVEOztBQUVBOztFQUVFLHFDQUFxQztBQUN2Qzs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtRkFBbUY7RUFDbkYseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixvQ0FBb0M7RUFDcEMsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsV0FBVztJQUNYLHVCQUF1QjtFQUN6QjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Uge1xuICBtYXgtd2lkdGg6IDExMjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDEuMjVyZW0gMS4zNXJlbSAzcmVtO1xufVxuXG4ucGFnZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4ucGFnZS1oZWFkZXItdGV4dCB7XG4gIG1heC13aWR0aDogbWluKDUyY2gsIDEwMCUpO1xufVxuXG4uZXllYnJvdyB7XG4gIG1hcmdpbjogMCAwIDAuMzVyZW07XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLXRtLWFjY2VudCk7XG59XG5cbi5wYWdlLWhlYWRlciBoMSB7XG4gIG1hcmdpbjogMCAwIDAuNHJlbTtcbiAgZm9udC1zaXplOiBjbGFtcCgxLjVyZW0sIDIuOHZ3LCAycmVtKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xufVxuXG4ubGVkZSB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRtLW11dGVkKTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBsaW5lLWhlaWdodDogMS41NTtcbn1cblxuLmJ0bi1hZGQge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IHZhcigtLXRtLWdsb3cpO1xufVxuXG4uYnRuLWFkZC1pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAxLjI1cmVtO1xuICBoZWlnaHQ6IDEuMjVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG9wYWNpdHk6IDAuOTU7XG59XG5cbi5zdGF0cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTQwcHgsIDFmcikpO1xuICBnYXA6IDAuNzVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG59XG5cbi5zdGF0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAxcmVtIDEuMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdG0tcmFkaXVzKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdG0tYm9yZGVyKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgdmFyKC0tdG0tc3VyZmFjZSkgMCUsIHZhcigtLXRtLXN1cmZhY2UtMikgMTAwJSk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXRtLXNoYWRvdyk7XG59XG5cbi5zdGF0OjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwIGF1dG8gMCAwO1xuICB3aWR0aDogM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tdG0tYm9yZGVyLXN0cm9uZyk7XG59XG5cbi5zdGF0LXRvdGFsOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLXRtLXByaW1hcnkpLCB2YXIoLS10bS1hY2NlbnQpKTtcbn1cblxuLnN0YXQtcGVuZGluZzo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjOTRhM2I4O1xufVxuXG4uc3RhdC1hY3RpdmU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogIzNiODJmNjtcbn1cblxuLnN0YXQtZG9uZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTBiOTgxO1xufVxuXG4uc3RhdC12YWx1ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEuNjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wM2VtO1xuICBsaW5lLWhlaWdodDogMS4xO1xuICBjb2xvcjogdmFyKC0tdG0tdGV4dCk7XG59XG5cbi5zdGF0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICBjb2xvcjogdmFyKC0tdG0tbXV0ZWQpO1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRtLXN1cmZhY2UpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10bS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS10bS1yYWRpdXMtbGcpO1xuICBib3gtc2hhZG93OiB2YXIoLS10bS1zaGFkb3cpO1xuICBwYWRkaW5nOiAxcmVtIDEuMTVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuMXJlbTtcbn1cblxuLmZpbHRlcnMge1xuICBwYWRkaW5nOiAxLjE1cmVtIDEuMjVyZW0gMS4yNXJlbTtcbn1cblxuLmZpbHRlcnMtaGVhZCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjg1cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdG0tYm9yZGVyKTtcbn1cblxuLmZpbHRlcnMtdGl0bGUge1xuICBtYXJnaW46IDAgMCAwLjI1cmVtO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5maWx0ZXJzLWhpbnQge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgY29sb3I6IHZhcigtLXRtLW11dGVkKTtcbn1cblxuLmZpbHRlcnMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICBnYXA6IDAuOXJlbSAxLjFyZW07XG59XG5cbi5maWx0ZXJzIC5maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC40cmVtO1xufVxuXG4uZmlsdGVycyBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgY29sb3I6IHZhcigtLXRtLW11dGVkKTtcbn1cblxuLmZpbHRlcnMgaW5wdXQsXG4uZmlsdGVycyBzZWxlY3Qge1xuICBwYWRkaW5nOiAwLjU1cmVtIDAuN3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdG0tYm9yZGVyKTtcbiAgZm9udDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6IHZhcigtLXRtLXRleHQpO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZSwgYm94LXNoYWRvdyAwLjE1cyBlYXNlO1xufVxuXG4uZmlsdGVycyBpbnB1dDpob3Zlcixcbi5maWx0ZXJzIHNlbGVjdDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdG0tYm9yZGVyLXN0cm9uZyk7XG59XG5cbi5maWx0ZXJzIGlucHV0OmZvY3VzLXZpc2libGUsXG4uZmlsdGVycyBzZWxlY3Q6Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdG0tcHJpbWFyeSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS10bS1mb2N1cyk7XG59XG5cbi50YWJsZS1jYXJkIHtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRhYmxlLXRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDAuNzVyZW0gMXJlbTtcbiAgcGFkZGluZzogMXJlbSAxLjJyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLXRtLXN1cmZhY2UtMikgMCUsIHZhcigtLXRtLXN1cmZhY2UpIDEwMCUpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdG0tYm9yZGVyKTtcbn1cblxuLnRhYmxlLXRpdGxlIHtcbiAgbWFyZ2luOiAwIDAgMC4ycmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi50YWJsZS1zdWIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgY29sb3I6IHZhcigtLXRtLW11dGVkKTtcbn1cblxuLnRhYmxlLWNvdW50IHtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogdmFyKC0tdG0tYWNjZW50KTtcbiAgcGFkZGluZzogMC4zNXJlbSAwLjY1cmVtO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogcmdiYSg5OSwgMTAyLCAyNDEsIDAuMTIpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4zNSk7XG59XG5cbi50YWJsZS1jYXJkIGFwcC1kYXRhLXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAucGFnZSB7XG4gICAgcGFkZGluZzogMXJlbSAxcmVtIDIuNXJlbTtcbiAgfVxuXG4gIC5idG4tYWRkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 9180:
/*!********************************************************!*\
  !*** ./src/app/features/tasks/tasks-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksRoutingModule: () => (/* binding */ TasksRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_guards_task_exists_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/guards/task-exists.guard */ 4588);
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-detail/task-detail.component */ 7663);
/* harmony import */ var _task_form_task_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-form/task-form.component */ 2039);
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-list/task-list.component */ 7259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);







const routes = [{
  path: '',
  component: _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__.TaskListComponent
}, {
  path: 'new',
  component: _task_form_task_form_component__WEBPACK_IMPORTED_MODULE_2__.TaskFormComponent
}, {
  path: ':id/edit',
  component: _task_form_task_form_component__WEBPACK_IMPORTED_MODULE_2__.TaskFormComponent,
  canActivate: [_core_guards_task_exists_guard__WEBPACK_IMPORTED_MODULE_0__.TaskExistsGuard]
}, {
  path: ':id',
  component: _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_1__.TaskDetailComponent,
  canActivate: [_core_guards_task_exists_guard__WEBPACK_IMPORTED_MODULE_0__.TaskExistsGuard]
}];
class TasksRoutingModule {
  static {
    this.ɵfac = function TasksRoutingModule_Factory(t) {
      return new (t || TasksRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: TasksRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TasksRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 5469:
/*!************************************************!*\
  !*** ./src/app/features/tasks/tasks.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksModule: () => (/* binding */ TasksModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-detail/task-detail.component */ 7663);
/* harmony import */ var _task_form_task_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-form/task-form.component */ 2039);
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-list/task-list.component */ 7259);
/* harmony import */ var _tasks_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks-routing.module */ 9180);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);






class TasksModule {
  static {
    this.ɵfac = function TasksModule_Factory(t) {
      return new (t || TasksModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: TasksModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _tasks_routing_module__WEBPACK_IMPORTED_MODULE_4__.TasksRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](TasksModule, {
    declarations: [_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__.TaskListComponent, _task_form_task_form_component__WEBPACK_IMPORTED_MODULE_2__.TaskFormComponent, _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_1__.TaskDetailComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _tasks_routing_module__WEBPACK_IMPORTED_MODULE_4__.TasksRoutingModule]
  });
})();

/***/ }),

/***/ 6042:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/ReplaySubject.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReplaySubject: () => (/* binding */ ReplaySubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 819);
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduler/dateTimestampProvider */ 5152);


class ReplaySubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
  constructor(_bufferSize = Infinity, _windowTime = Infinity, _timestampProvider = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__.dateTimestampProvider) {
    super();
    this._bufferSize = _bufferSize;
    this._windowTime = _windowTime;
    this._timestampProvider = _timestampProvider;
    this._buffer = [];
    this._infiniteTimeWindow = true;
    this._infiniteTimeWindow = _windowTime === Infinity;
    this._bufferSize = Math.max(1, _bufferSize);
    this._windowTime = Math.max(1, _windowTime);
  }
  next(value) {
    const {
      isStopped,
      _buffer,
      _infiniteTimeWindow,
      _timestampProvider,
      _windowTime
    } = this;
    if (!isStopped) {
      _buffer.push(value);
      !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
    }
    this._trimBuffer();
    super.next(value);
  }
  _subscribe(subscriber) {
    this._throwIfClosed();
    this._trimBuffer();
    const subscription = this._innerSubscribe(subscriber);
    const {
      _infiniteTimeWindow,
      _buffer
    } = this;
    const copy = _buffer.slice();
    for (let i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
      subscriber.next(copy[i]);
    }
    this._checkFinalizedStatuses(subscriber);
    return subscription;
  }
  _trimBuffer() {
    const {
      _bufferSize,
      _timestampProvider,
      _buffer,
      _infiniteTimeWindow
    } = this;
    const adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
    _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
    if (!_infiniteTimeWindow) {
      const now = _timestampProvider.now();
      let last = 0;
      for (let i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
        last = i;
      }
      last && _buffer.splice(0, last + 1);
    }
  }
}

/***/ }),

/***/ 1962:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Scheduler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scheduler: () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduler/dateTimestampProvider */ 5152);

class Scheduler {
  constructor(schedulerActionCtor, now = Scheduler.now) {
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  schedule(work, delay = 0, state) {
    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  }
}
Scheduler.now = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__.dateTimestampProvider.now;

/***/ }),

/***/ 4876:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/timer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timer: () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 3942);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 8473);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ 9397);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isDate */ 5602);




function timer(dueTime = 0, intervalOrScheduler, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  let intervalDuration = -1;
  if (intervalOrScheduler != null) {
    if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
    let due = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_3__.isValidDate)(dueTime) ? +dueTime - scheduler.now() : dueTime;
    if (due < 0) {
      due = 0;
    }
    let n = 0;
    return scheduler.schedule(function () {
      if (!subscriber.closed) {
        subscriber.next(n++);
        if (0 <= intervalDuration) {
          this.schedule(undefined, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}

/***/ }),

/***/ 2575:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounceTime: () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 8473);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 3200);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 1687);



function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;
    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };
    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();
      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }
      emit();
    }
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      lastValue = value;
      lastTime = scheduler.now();
      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = activeTask = null;
    }));
  });
}

/***/ }),

/***/ 5074:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/delay.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   delay: () => (/* binding */ delay)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 8473);
/* harmony import */ var _delayWhen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delayWhen */ 1534);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/timer */ 4876);



function delay(due, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  const duration = (0,_observable_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(due, scheduler);
  return (0,_delayWhen__WEBPACK_IMPORTED_MODULE_2__.delayWhen)(() => duration);
}

/***/ }),

/***/ 1534:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/delayWhen.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   delayWhen: () => (/* binding */ delayWhen)
/* harmony export */ });
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/concat */ 4665);
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./take */ 4334);
/* harmony import */ var _ignoreElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ignoreElements */ 7242);
/* harmony import */ var _mapTo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapTo */ 7378);
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mergeMap */ 3255);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observable/innerFrom */ 2645);






function delayWhen(delayDurationSelector, subscriptionDelay) {
  if (subscriptionDelay) {
    return source => (0,_observable_concat__WEBPACK_IMPORTED_MODULE_0__.concat)(subscriptionDelay.pipe((0,_take__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,_ignoreElements__WEBPACK_IMPORTED_MODULE_2__.ignoreElements)()), source.pipe(delayWhen(delayDurationSelector)));
  }
  return (0,_mergeMap__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((value, index) => (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__.innerFrom)(delayDurationSelector(value, index)).pipe((0,_take__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,_mapTo__WEBPACK_IMPORTED_MODULE_5__.mapTo)(value)));
}

/***/ }),

/***/ 7242:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/ignoreElements.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ignoreElements: () => (/* binding */ ignoreElements)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 3200);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 1687);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/noop */ 4318);



function ignoreElements() {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, _util_noop__WEBPACK_IMPORTED_MODULE_2__.noop));
  });
}

/***/ }),

/***/ 6301:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/shareReplay.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shareReplay: () => (/* binding */ shareReplay)
/* harmony export */ });
/* harmony import */ var _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ReplaySubject */ 6042);
/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share */ 1870);


function shareReplay(configOrBufferSize, windowTime, scheduler) {
  let bufferSize;
  let refCount = false;
  if (configOrBufferSize && typeof configOrBufferSize === 'object') {
    ({
      bufferSize = Infinity,
      windowTime = Infinity,
      refCount = false,
      scheduler
    } = configOrBufferSize);
  } else {
    bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
  }
  return (0,_share__WEBPACK_IMPORTED_MODULE_0__.share)({
    connector: () => new _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(bufferSize, windowTime, scheduler),
    resetOnError: true,
    resetOnComplete: false,
    resetOnRefCountZero: refCount
  });
}

/***/ }),

/***/ 9103:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 2510);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(scheduler, work) {
    super();
  }
  schedule(state, delay = 0) {
    return this;
  }
}

/***/ }),

/***/ 2083:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncAction: () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 9103);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intervalProvider */ 8113);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/arrRemove */ 967);



class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
    this.pending = false;
  }
  schedule(state, delay = 0) {
    var _a;
    if (this.closed) {
      return this;
    }
    this.state = state;
    const id = this.id;
    const scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
    return this;
  }
  requestAsyncId(scheduler, _id, delay = 0) {
    return _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
  }
  recycleAsyncId(_scheduler, id, delay = 0) {
    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }
    if (id != null) {
      _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.clearInterval(id);
    }
    return undefined;
  }
  execute(state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }
    this.pending = false;
    const error = this._execute(state, delay);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  }
  _execute(state, _delay) {
    let errored = false;
    let errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error('Scheduled action threw falsy error');
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  }
  unsubscribe() {
    if (!this.closed) {
      const {
        id,
        scheduler
      } = this;
      const {
        actions
      } = scheduler;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      super.unsubscribe();
    }
  }
}

/***/ }),

/***/ 2400:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncScheduler: () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 1962);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
  constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
    super(SchedulerAction, now);
    this.actions = [];
    this._active = false;
  }
  flush(action) {
    const {
      actions
    } = this;
    if (this._active) {
      actions.push(action);
      return;
    }
    let error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}

/***/ }),

/***/ 8473:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   async: () => (/* binding */ async),
/* harmony export */   asyncScheduler: () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 2083);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 2400);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;

/***/ }),

/***/ 5152:
/*!********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/dateTimestampProvider.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dateTimestampProvider: () => (/* binding */ dateTimestampProvider)
/* harmony export */ });
const dateTimestampProvider = {
  now() {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: undefined
};

/***/ }),

/***/ 8113:
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/intervalProvider.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   intervalProvider: () => (/* binding */ intervalProvider)
/* harmony export */ });
const intervalProvider = {
  setInterval(handler, timeout, ...args) {
    const {
      delegate
    } = intervalProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval(handler, timeout, ...args);
    }
    return setInterval(handler, timeout, ...args);
  },
  clearInterval(handle) {
    const {
      delegate
    } = intervalProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: undefined
};

/***/ }),

/***/ 5602:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isDate.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidDate: () => (/* binding */ isValidDate)
/* harmony export */ });
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_tasks_tasks_module_ts.js.map