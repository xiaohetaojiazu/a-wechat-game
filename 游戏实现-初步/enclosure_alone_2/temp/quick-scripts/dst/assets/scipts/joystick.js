
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scipts/joystick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ea4d7Y32sNB6oW3hROgxdBy', 'joystick');
// scipts/joystick.js

"use strict";

var Common = require('joystickcommon');

var JoystickBG = require('joystickbg');

cc.Class({
  "extends": cc.Component,
  properties: {
    dot: {
      "default": null,
      type: cc.Node,
      displayName: 'dot'
    },
    ring: {
      "default": null,
      type: JoystickBG,
      displayName: 'ring'
    },
    stickX: {
      "default": 0,
      displayName: 'dotx'
    },
    stickY: {
      "default": 0,
      displayName: 'doty'
    },
    touchType: {
      "default": Common.TouchType.DEFAULT,
      type: Common.TouchType,
      displayName: 'touchtype'
    },
    directionType: {
      "default": Common.DirectionType.ALL,
      type: Common.DirectionType,
      displayName: 'directionType'
    },
    sprite: {
      "default": null,
      type: cc.Node,
      displayName: 'control_player' //���ݵ�Ŀ��

    },
    _stickPos: {
      "default": null,
      type: cc.Node,
      displayName: 'ҡ�˵�ǰλ��'
    },
    _touchLocation: {
      "default": null,
      type: cc.Node,
      displayName: 'ҡ�˵�ǰλ��'
    }
  },
  onLoad: function onLoad() {
    this._createStickSprite(); //����������ΪFOLLOW���ڴ˶�ԲȦ�Ĵ�������


    if (this.touchType == Common.TouchType.FOLLOW) {
      this._initTouchEvent();
    }
  },
  _createStickSprite: function _createStickSprite() {
    //����ҡ�˵�λ��
    this.ring.node.setPosition(this.stickX, this.stickY);
    this.dot.setPosition(this.stickX, this.stickY);
  },
  _initTouchEvent: function _initTouchEvent() {
    var self = this;
    self.node.on(cc.Node.EventType.TOUCH_START, self._touchStartEvent, self);
    self.node.on(cc.Node.EventType.TOUCH_MOVE, self._touchMoveEvent, self); // ������ԲȦ���뿪����ԲȦ���뿪��ҡ�˹�λ��player�ٶ�Ϊ0

    self.node.on(cc.Node.EventType.TOUCH_END, self._touchEndEvent, self);
    self.node.on(cc.Node.EventType.TOUCH_CANCEL, self._touchEndEvent, self);
  },
  _touchStartEvent: function _touchStartEvent(event) {
    // ��¼�������������꣬��touch moveʹ��
    this._touchLocation = event.getLocation();
    var touchPos = this.node.convertToNodeSpaceAR(event.getLocation()); // ����ҡ�˵�λ��

    this.ring.node.setPosition(touchPos);
    this.dot.setPosition(touchPos); // ��¼ҡ��λ�ã���touch moveʹ��

    this._stickPos = touchPos;
  },
  _touchMoveEvent: function _touchMoveEvent(event) {
    // ���touch startλ�ú�touch move��ͬ����ֹ�ƶ�
    if (this._touchLocation.x == event.getLocation().x && this._touchLocation.y == event.getLocation().y) {
      return false;
    } // ��ԲȦΪê���ȡ��������


    var touchPos = this.ring.node.convertToNodeSpaceAR(event.getLocation());

    var distance = this.ring._getDistance(touchPos, cc.Vec2(0, 0));

    var radius = this.ring.node.width / 2; // ����ҡ�˵�postion���Ը��ڵ�Ϊê�㣬���Զ�λҪ����touch startʱ��λ��

    var posX = this._stickPos.x + touchPos.x;
    var posY = this._stickPos.y + touchPos.y;

    if (radius > distance) {
      this.dot.setPosition(cc.Vec2(posX, posY));
    } else {
      //�ظ���Զ������Ȧ�ڣ�����Ȧ�ڸ��津�����½Ƕ�
      var x = this._stickPos.x + Math.cos(this.ring._getRadian(cc.Vec2(posX, posY))) * radius;
      var y = this._stickPos.y + Math.sin(this.ring._getRadian(cc.Vec2(posX, posY))) * radius;
      this.dot.setPosition(cc.Vec2(x, y));
    } //���½Ƕ�


    this.ring._getAngle(cc.Vec2(posX, posY)); //����ʵ���ٶ�


    this.ring._setSpeed(cc.Vec2(posX, posY));
  },
  _touchEndEvent: function _touchEndEvent() {
    this.dot.setPosition(this.ring.node.getPosition());
    this.ring._speed = 0;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NpcHRzXFxqb3lzdGljay5qcyJdLCJuYW1lcyI6WyJDb21tb24iLCJyZXF1aXJlIiwiSm95c3RpY2tCRyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZG90IiwidHlwZSIsIk5vZGUiLCJkaXNwbGF5TmFtZSIsInJpbmciLCJzdGlja1giLCJzdGlja1kiLCJ0b3VjaFR5cGUiLCJUb3VjaFR5cGUiLCJERUZBVUxUIiwiZGlyZWN0aW9uVHlwZSIsIkRpcmVjdGlvblR5cGUiLCJBTEwiLCJzcHJpdGUiLCJfc3RpY2tQb3MiLCJfdG91Y2hMb2NhdGlvbiIsIm9uTG9hZCIsIl9jcmVhdGVTdGlja1Nwcml0ZSIsIkZPTExPVyIsIl9pbml0VG91Y2hFdmVudCIsIm5vZGUiLCJzZXRQb3NpdGlvbiIsInNlbGYiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiX3RvdWNoU3RhcnRFdmVudCIsIlRPVUNIX01PVkUiLCJfdG91Y2hNb3ZlRXZlbnQiLCJUT1VDSF9FTkQiLCJfdG91Y2hFbmRFdmVudCIsIlRPVUNIX0NBTkNFTCIsImV2ZW50IiwiZ2V0TG9jYXRpb24iLCJ0b3VjaFBvcyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwieCIsInkiLCJkaXN0YW5jZSIsIl9nZXREaXN0YW5jZSIsIlZlYzIiLCJyYWRpdXMiLCJ3aWR0aCIsInBvc1giLCJwb3NZIiwiTWF0aCIsImNvcyIsIl9nZXRSYWRpYW4iLCJzaW4iLCJfZ2V0QW5nbGUiLCJfc2V0U3BlZWQiLCJnZXRQb3NpdGlvbiIsIl9zcGVlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxnQkFBRCxDQUFwQjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxZQUFELENBQXhCOztBQUVBRSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxF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QVYsQ0FBb0J0RCxFQUFFLENBQUM0QyxJQUFILENBQVFHLElBQVIsRUFBYUMsSUFBYixDQUFwQjtBQUNILEdBOUhJO0FBZ0lMZCxFQUFBQSxjQUFjLEVBQUUsMEJBQVU7QUFDdEIsU0FBSzlCLEdBQUwsQ0FBU3FCLFdBQVQsQ0FBcUIsS0FBS2pCLElBQUwsQ0FBVWdCLElBQVYsQ0FBZStCLFdBQWYsRUFBckI7QUFDQSxTQUFLL0MsSUFBTCxDQUFVZ0QsTUFBVixHQUFtQixDQUFuQjtBQUNIO0FBbklJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDb21tb24gPSByZXF1aXJlKCdqb3lzdGlja2NvbW1vbicpO1xyXG52YXIgSm95c3RpY2tCRyA9IHJlcXVpcmUoJ2pveXN0aWNrYmcnKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZG90OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnZG90JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJpbmc6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogSm95c3RpY2tCRyxcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdyaW5nJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0aWNrWDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ2RvdHgnLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHN0aWNrWToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ2RvdHknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG91Y2hUeXBlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IENvbW1vbi5Ub3VjaFR5cGUuREVGQVVMVCxcclxuICAgICAgICAgICAgdHlwZTogQ29tbW9uLlRvdWNoVHlwZSxcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICd0b3VjaHR5cGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGlyZWN0aW9uVHlwZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBDb21tb24uRGlyZWN0aW9uVHlwZS5BTEwsXHJcbiAgICAgICAgICAgIHR5cGU6IENvbW1vbi5EaXJlY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ2RpcmVjdGlvblR5cGUnLFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ2NvbnRyb2xfcGxheWVyJyxcclxuICAgICAgICAgICAgLy/vv73vv73vv73dte+/vcS/77+977+9XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIF9zdGlja1Bvczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ9Kh77+9y7Xvv73HsM6777+977+9JyxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBfdG91Y2hMb2NhdGlvbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ9Kh77+9y7Xvv73HsM6777+977+9JyxcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9jcmVhdGVTdGlja1Nwcml0ZSgpO1xyXG4gICAgICAgIC8v77+977+977+977+977+977+977+977+977+977+9zqpGT0xMT1fvv73vv73vv73atMu277+91LLIpu+/vcS077+977+977+977+977+977+977+9XHJcbiAgICAgICAgaWYodGhpcy50b3VjaFR5cGUgPT0gQ29tbW9uLlRvdWNoVHlwZS5GT0xMT1cpe1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0VG91Y2hFdmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgX2NyZWF0ZVN0aWNrU3ByaXRlOiBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgLy/vv73vv73vv73vv73Soe+/vcu177+9zrvvv73vv71cclxuICAgICAgICB0aGlzLnJpbmcubm9kZS5zZXRQb3NpdGlvbih0aGlzLnN0aWNrWCwgdGhpcy5zdGlja1kpO1xyXG4gICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKHRoaXMuc3RpY2tYLCB0aGlzLnN0aWNrWSk7XHJcbiAgICB9LFxyXG5cclxuICAgIF9pbml0VG91Y2hFdmVudDogZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgc2VsZi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBzZWxmLl90b3VjaFN0YXJ0RXZlbnQsIHNlbGYpO1xyXG5cclxuICAgICAgICBzZWxmLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgc2VsZi5fdG91Y2hNb3ZlRXZlbnQsIHNlbGYpO1xyXG5cclxuICAgICAgICAvLyDvv73vv73vv73vv73vv73vv73Ussim77+977+977+967+q77+977+977+977+91LLIpu+/ve+/ve+/veu/qu+/ve+/vdKh77+9y7nvv73Ou++/ve+/vXBsYXllcu+/vdm277+9zqowXHJcbiAgICAgICAgc2VsZi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgc2VsZi5fdG91Y2hFbmRFdmVudCxzZWxmKTtcclxuICAgICAgICBzZWxmLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCBzZWxmLl90b3VjaEVuZEV2ZW50LHNlbGYpO1xyXG5cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIF90b3VjaFN0YXJ0RXZlbnQ6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgLy8g77+977+9wrzvv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73qo6zvv73vv710b3VjaCBtb3Zlyrnvv73vv71cclxuICAgICAgICB0aGlzLl90b3VjaExvY2F0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB2YXIgdG91Y2hQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgLy8g77+977+977+977+90qHvv73Lte+/vc6777+977+9XHJcbiAgICAgICAgdGhpcy5yaW5nLm5vZGUuc2V0UG9zaXRpb24odG91Y2hQb3MpO1xyXG4gICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKHRvdWNoUG9zKTtcclxuICAgICAgICAvLyDvv73vv73CvNKh77+977+9zrvvv73Do++/ve+/ve+/vXRvdWNoIG1vdmXKue+/ve+/vVxyXG4gICAgICAgIHRoaXMuX3N0aWNrUG9zID0gdG91Y2hQb3M7XHJcbiAgICB9LFxyXG5cclxuICAgIF90b3VjaE1vdmVFdmVudDogZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgLy8g77+977+977+9dG91Y2ggc3RhcnTOu++/vcO677+9dG91Y2ggbW92Ze+/ve+/vc2s77+977+977+977+91rnvv73Gtu+/vVxyXG4gICAgICAgIGlmICh0aGlzLl90b3VjaExvY2F0aW9uLnggPT0gZXZlbnQuZ2V0TG9jYXRpb24oKS54ICYmIHRoaXMuX3RvdWNoTG9jYXRpb24ueSA9PSBldmVudC5nZXRMb2NhdGlvbigpLnkpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIO+/ve+/vdSyyKbOqsOq77+977+977+9yKHvv73vv73vv73vv73vv73vv73vv73vv71cclxuICAgICAgICB2YXIgdG91Y2hQb3MgPSB0aGlzLnJpbmcubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICB2YXIgZGlzdGFuY2UgPSB0aGlzLnJpbmcuX2dldERpc3RhbmNlKHRvdWNoUG9zLGNjLlZlYzIoMCwwKSk7XHJcbiAgICAgICAgdmFyIHJhZGl1cyA9IHRoaXMucmluZy5ub2RlLndpZHRoIC8gMjtcclxuXHJcbiAgICAgICAgLy8g77+977+977+977+90qHvv73Lte+/vXBvc3Rpb27vv73vv73vv73UuO+/ve+/vdq177+9zqrDqu+/veOjrO+/ve+/ve+/vdS277+9zrvSqu+/ve+/ve+/ve+/vXRvdWNoIHN0YXJ0yrHvv73vv73Ou++/ve+/vVxyXG4gICAgICAgIHZhciBwb3NYID0gdGhpcy5fc3RpY2tQb3MueCArIHRvdWNoUG9zLng7XHJcbiAgICAgICAgdmFyIHBvc1kgPSB0aGlzLl9zdGlja1Bvcy55ICsgdG91Y2hQb3MueTtcclxuICAgICAgICBpZihyYWRpdXMgPiBkaXN0YW5jZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKGNjLlZlYzIocG9zWCwgcG9zWSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL++/vdi477+977+977+91Lbvv73vv73vv73vv73vv73vv73Ipu+/vdqj77+977+977+977+977+9yKbvv73auO+/ve+/vea0pe+/ve+/ve+/ve+/ve+/vcK9x7bvv71cclxuICAgICAgICAgICAgdmFyIHggPSB0aGlzLl9zdGlja1Bvcy54ICsgTWF0aC5jb3ModGhpcy5yaW5nLl9nZXRSYWRpYW4oY2MuVmVjMihwb3NYLHBvc1kpKSkgKiByYWRpdXM7XHJcbiAgICAgICAgICAgIHZhciB5ID0gdGhpcy5fc3RpY2tQb3MueSArIE1hdGguc2luKHRoaXMucmluZy5fZ2V0UmFkaWFuKGNjLlZlYzIocG9zWCxwb3NZKSkpICogcmFkaXVzO1xyXG4gICAgICAgICAgICB0aGlzLmRvdC5zZXRQb3NpdGlvbihjYy5WZWMyKHgsIHkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/vv73vv73vv73Cvce277+9XHJcbiAgICAgICAgdGhpcy5yaW5nLl9nZXRBbmdsZShjYy5WZWMyKHBvc1gscG9zWSkpO1xyXG4gICAgICAgIC8v77+977+977+977+9yrXvv73vv73vv73Ztu+/vVxyXG4gICAgICAgIHRoaXMucmluZy5fc2V0U3BlZWQoY2MuVmVjMihwb3NYLHBvc1kpKTtcclxuICAgIH0sXHJcblxyXG4gICAgX3RvdWNoRW5kRXZlbnQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5kb3Quc2V0UG9zaXRpb24odGhpcy5yaW5nLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgdGhpcy5yaW5nLl9zcGVlZCA9IDA7XHJcbiAgICB9LFxyXG5cclxufSk7XHJcbiJdfQ==