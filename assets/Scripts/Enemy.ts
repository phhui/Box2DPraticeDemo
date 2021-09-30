/**
 * @ Author: Phhui
 * @ Create Time: 2021-09-30 10:47:44
 * @ Modified by: Phhui
 * @ Modified time: 2021-09-30 10:49:52
 * @ Description:
 */


import { _decorator, Component, Node, Prefab, CCObject, instantiate } from 'cc';
const { ccclass, property } = _decorator;
@ccclass('Main')
export class Enemy extends Component {
    private t:number=0;
    private speed:number=1;
    start () {

    }
    update(dt){
        this.node.setPosition(this.node.position.x,this.node.position.y-this.speed);
    }
}