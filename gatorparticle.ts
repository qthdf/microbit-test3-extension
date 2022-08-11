namespace gatorParticle {


    //% weight=30 
    //% blockId="gatorParticle_begin" 
    //% block="心率血氧传感器初始化"
    //% group="心率血氧传感器" subcategory=传感器
    //% shim=gatorParticle::begin
    export function begin() {
        return
    }

    /**
    * Reads either the Red or Infrared detection channels..
    */
    //% weight=29 
    //% blockId="gatorParticle_color" 
    //% block="获取 %LEDToRead 值"
    //% group="心率血氧传感器" subcategory=传感器
    //% shim=gatorParticle::color
    export function color(type: LEDToRead): number {
        return 0
    }

    /**
    * Set which LED's we want the sensor to update and read.
    */
    //% weight=28
    //% blockId="gatorParticle_setReadMode"
    //% block="设置LED的读取模式 %LEDMode"
    //% group="心率血氧传感器" subcategory=传感器
    //% shim=gatorParticle::setReadMode

    export function setReadMode(mode: LEDMode) {
        return
    }

    /**
    * Set the amplitude of either Red or Infrared LED
    */
    //% weight=27
    //% blockId="gatorParticle_setAmplitude"
    //% block="将强度从 %LEDToRead | 设置为 %myBrightness"
    //% group="心率血氧传感器" subcategory=传感器
    //% shim=gatorParticle::setAmplitude

    export function setAmplitude(led: LEDToRead, myBrightness: number) {
        return
    }

    /**
    * Grab the heartbeat from the sensor in either beats per minute, or an average of the last 4 BPM readings.
    */
    //% weight=26
    //% blockId="gatorParticle_heartbeat"
    //% block="设置心跳检测方式为%HeartbeatType"
    //% group="心率血氧传感器" subcategory=传感器
    //% shim=gatorParticle::heartbeat
    export function heartbeat(type: HeartbeatType): number {
        return 0
    }
}