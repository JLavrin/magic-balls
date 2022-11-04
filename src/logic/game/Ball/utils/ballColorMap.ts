import BALL_COLOR_NAME from "../enums/BALL_COLOR_NAME"
import Ball_Colors from "../constants/BALL_COLORS"

const ballColorMap = new Map<BALL_COLOR_NAME, string>([
  [BALL_COLOR_NAME.RED, Ball_Colors.RED],
  [BALL_COLOR_NAME.BLUE, Ball_Colors.BLUE],
  [BALL_COLOR_NAME.GREEN, Ball_Colors.GREEN],
  [BALL_COLOR_NAME.YELLOW, Ball_Colors.YELLOW],
  [BALL_COLOR_NAME.PURPLE, Ball_Colors.PURPLE],
  [BALL_COLOR_NAME.ORANGE, Ball_Colors.ORANGE],
  [BALL_COLOR_NAME.TURQUOISE, Ball_Colors.TURQUOISE],
  [BALL_COLOR_NAME.PINK, Ball_Colors.PINK]
])

export default ballColorMap
