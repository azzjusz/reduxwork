"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.parseLocalData = exports.parseVirtualData = exports.parseActionData = void 0;var _lodash = require("lodash");




var parseActionData = function parseActionData(action, omitFields) {
  if (!action[omitFields])
  return action.payload;
  return (0, _lodash.map)(action.payload, function (item) {return (0, _lodash.omit)(item, action[omitFields]);});
};exports.parseActionData = parseActionData;

var parseVirtualData = function parseVirtualData(action, options) {return (
    parseActionData(action, options.localFieldsName));};exports.parseVirtualData = parseVirtualData;

var parseLocalData = function parseLocalData(action, options) {return (
    parseActionData(action, options.virtualFieldsName));};exports.parseLocalData = parseLocalData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWIvZmllbGRzT3BlcmF0aW9ucy5qcyJdLCJuYW1lcyI6WyJwYXJzZUFjdGlvbkRhdGEiLCJhY3Rpb24iLCJvbWl0RmllbGRzIiwicGF5bG9hZCIsIml0ZW0iLCJwYXJzZVZpcnR1YWxEYXRhIiwib3B0aW9ucyIsImxvY2FsRmllbGRzTmFtZSIsInBhcnNlTG9jYWxEYXRhIiwidmlydHVhbEZpZWxkc05hbWUiXSwibWFwcGluZ3MiOiJnS0FBQTs7Ozs7QUFLTyxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLE1BQUQsRUFBU0MsVUFBVCxFQUF3QjtBQUNyRCxNQUFJLENBQUNELE1BQU0sQ0FBQ0MsVUFBRCxDQUFYO0FBQ0UsU0FBT0QsTUFBTSxDQUFDRSxPQUFkO0FBQ0YsU0FBTyxpQkFBSUYsTUFBTSxDQUFDRSxPQUFYLEVBQW9CLFVBQUFDLElBQUksVUFBSSxrQkFBS0EsSUFBTCxFQUFXSCxNQUFNLENBQUNDLFVBQUQsQ0FBakIsQ0FBSixFQUF4QixDQUFQO0FBQ0QsQ0FKTSxDOztBQU1BLElBQU1HLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0osTUFBRCxFQUFTSyxPQUFUO0FBQzlCTixJQUFBQSxlQUFlLENBQUNDLE1BQUQsRUFBU0ssT0FBTyxDQUFDQyxlQUFqQixDQURlLEdBQXpCLEM7O0FBR0EsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDUCxNQUFELEVBQVNLLE9BQVQ7QUFDNUJOLElBQUFBLGVBQWUsQ0FBQ0MsTUFBRCxFQUFTSyxPQUFPLENBQUNHLGlCQUFqQixDQURhLEdBQXZCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIG9taXQsXHJcbiAgbWFwXHJcbn0gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBjb25zdCBwYXJzZUFjdGlvbkRhdGEgPSAoYWN0aW9uLCBvbWl0RmllbGRzKSA9PiB7XHJcbiAgaWYgKCFhY3Rpb25bb21pdEZpZWxkc10pXHJcbiAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgcmV0dXJuIG1hcChhY3Rpb24ucGF5bG9hZCwgaXRlbSA9PiBvbWl0KGl0ZW0sIGFjdGlvbltvbWl0RmllbGRzXSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhcnNlVmlydHVhbERhdGEgPSAoYWN0aW9uLCBvcHRpb25zKSA9PlxyXG4gIHBhcnNlQWN0aW9uRGF0YShhY3Rpb24sIG9wdGlvbnMubG9jYWxGaWVsZHNOYW1lKTtcclxuXHJcbmV4cG9ydCBjb25zdCBwYXJzZUxvY2FsRGF0YSA9IChhY3Rpb24sIG9wdGlvbnMpID0+XHJcbiAgcGFyc2VBY3Rpb25EYXRhKGFjdGlvbiwgb3B0aW9ucy52aXJ0dWFsRmllbGRzTmFtZSk7Il19