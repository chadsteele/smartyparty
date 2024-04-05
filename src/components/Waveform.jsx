import { Box, IconButton, TextField } from "@suid/material"
import { Fab } from "@suid/material"
import MicIcon from "@suid/icons-material/Mic"
import PauseIcon from "@suid/icons-material/PauseCircle"

import Button from "@suid/material/Button"
import { Show, createSignal, onMount, createEffect } from "solid-js"
import { listening } from './Listener'

const colorstops = "#f95522 #cbb4fe #f00".split(' ')

export default function () {

	onMount(() => {
		// see https://codepen.io/Doma/pen/JjoaOwK
		try {

			function startRecord (e) {
				navigator.getUserMedia = navigator.getUserMedia
					|| navigator.webkitGetUserMedia
					|| navigator.mozGetUserMedia;

				navigator.getUserMedia({ video: false, audio: true }, callback, console.log);

				function callback (stream) {
					var ctx = new AudioContext();
					var mic = ctx.createMediaStreamSource(stream);
					var analyser = ctx.createAnalyser()
					mic.connect(analyser)
					drawSpectrum(analyser)
				}


				var drawSpectrum = function (analyser) {

					var canvas = document.getElementById("canvas"),
						cwidth = canvas.width,
						cheight = canvas.height,
						meterWidth = 8,
						gap = 2,
						meterNum = cwidth / (meterWidth + gap),
						ctx = canvas.getContext("2d"),
						gradient = ctx.createLinearGradient(0, 0, 0, cheight)
					gradient.addColorStop(1, colorstops[0])
					gradient.addColorStop(0.5, colorstops[1])
					gradient.addColorStop(0, colorstops[2])
					ctx.fillStyle = gradient

					var drawMeter = function () {
						if (!listening()) return

						var array = new Uint8Array(analyser.frequencyBinCount)
						analyser.getByteFrequencyData(array)

						var step = Math.round(array.length / meterNum)
						ctx.clearRect(0, 0, cwidth, cheight)
						for (var i = 0; i < meterNum; i++) {
							var value = array[i * step]

							ctx.fillRect(
								i * (meterWidth + gap),
								cheight - value,
								meterWidth,
								cheight
							)
						}
						requestAnimationFrame(drawMeter)
					}
					requestAnimationFrame(drawMeter)
				}

			}

			createEffect(() => {
				if (listening()) startRecord();
			})
		} catch (e) { console.log({ Wavform_failed: e }) }
	})
	return (
		<>
			<audio id="microphone" autoplay></audio>
			<div class="wrap">
				<canvas
					id="canvas"

					style={{
						display: "inline",
						width: "100%",
						height: "60px",
						//margin: "10px",
						//margin: "20px auto 0 auto",
						"border-bottom": "2px solid " + colorstops[0],
					}}
				></canvas>
			</div>
		</>
	)
}
