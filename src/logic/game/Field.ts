import { StepContext } from "@mui/material"

class Field {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  private fieldWidth: number
  private fieldHeight: number
  private columnsCount: number
  private rowscount: number
  private top: number
  private bottom: number
  private left: number
  private right: number



  constructor(
      columnsCount = 10,
      rowsCount = 10,
      top = 0,
      left = 0
    ) {
    const canvas = document.getElementById('game') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')

    if (!canvas || !ctx) {
      throw new Error('No context.')
    }
 
    this.canvas = canvas
    this.ctx = ctx
    this.canvas.height = 1000
    this.canvas.width = 1000

    this.fieldHeight = this.canvas.height
    this.fieldWidth = this.canvas.width
    this.columnsCount = columnsCount
    this.rowscount = rowsCount
    this.top = top
    this.left = left
    this.bottom = top + this.canvas.height
    this.right = left + this.canvas.width

    this.draw(ctx)
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.clear()
    ctx.fillStyle = "#555"
    ctx.fillRect(
      this.left,
      this.top,
      this.fieldWidth,
      this.fieldHeight
    );

    this.drawLines(ctx, true)
    this.drawLines(ctx, false)

  }

  drawLines(ctx: CanvasRenderingContext2D, isVertical?: boolean) {
    const start = isVertical ? this.left : this.top
    const end = isVertical ? this.right : this.bottom
    const startFrom = isVertical ? this.top : this.left
    const endTo = isVertical ? this.bottom : this.right


    for (let line = 1; line < this.columnsCount; line++ ) {
      const magicNumber = this.lerp(start, end, line/this.columnsCount)
      
      ctx.lineWidth = 10
      ctx.strokeStyle = '#444'
      ctx.beginPath()
      if (isVertical) {
        ctx.moveTo(magicNumber, startFrom)
        ctx.lineTo(magicNumber, endTo)
      } else {
        ctx.moveTo(startFrom, magicNumber)
        ctx.lineTo(endTo, magicNumber)
      }
     
      ctx.stroke()
    }
  }

  lerp(A: number, B: number, t: number) {
    return A + (B-A) * t
  }

  
}

export default Field