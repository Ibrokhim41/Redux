import { useState } from "react";

const CardZoom = () => {
  const [zoom, setZoom] = useState();

  const hoverZoom = () => {};

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEBAPDw8VEBAPEBYPDw8PEBAQDw8VFRYWFhUVFRUYHSggGBolHRUWIT0hJSkrLi4uFx8zODMtNygtLisBCgoKDQ0OFRAPFS4dFxo3NS0tLSstLSstKysrLSsrLSstLS0tLS0tLSstKysrLS0rLS0tLSstKysrKysrKy0tLf/AABEIAPQAzgMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAwECBAcGBQj/xABGEAABAwEEAgsMCgMAAwEAAAABAAIRAwQSITEFExQiM0FRYXFykbLBBjJSU3SCkpOhs9HhBxUWIzRUgbHS8EJzwyU18ST/xAAYAQEAAwEAAAAAAAAAAAAAAAAAAQMEAv/EACARAQABBAIDAQEAAAAAAAAAAAARAQIDEzEyIVFhEoH/2gAMAwEAAhEDEQA/AO4oQqveGgkmAMygshIFYnIQN69n0KbzuEeifigchJvO4R6PzRedwj0fmgchJvO4R6PzRedwj0fmgchJvu4R6PzVDVcN8dB+KDShZNkO4ug/FWa954Og/FBpQky/i6Pmpl3F0fNA1CS5z96J3pkDpWY2i0eIHrR8EG9CwbItHiB60fBGyLR4getb8EG9CwbItHiB61vwVqdasTBpNaN86yfYAg2oSpdxdHzRLuLo+aBqEm87i6FLau8RHGgahCEAslqF57G/4iahHCRAbPFiT+gWtIcPvPM7UEEqJQVCgTKJUIRKZRKhCAJSnlMKTURC1mbJJ4FtAXlu6bSNWz0GvovuOdXawuutcbtyo7AOBGbQvMfai3fmT6qz/wAFZbjrdSaOLr6Ur5dShELlv2ot35k+qs/8Efai3fmT6qz/AMF1quRttdRhELl32ot35o+qs/8ABH2ot35k+qs/8E1XG211GFzzuGfp06RtY0lOxBfuBzKYph14avUFuJbdvZzhE4rD9qLd+ZPqrP8AwR9qLd+ZPqrP/BNVxttdRhELl32ot35k+qs/8Efai3fmT6qz/wAE1XG211KEQuWnupt35k+qs/8ABbq2l7e1rXG299UbTg0rOCLwkuIumAMlGq42UdEhUe1eH0hbbdRYH/WLX7YNhlOgSJMT3iyWnTFvYxz9nB10ZClQxkxhtP7DhvKNdap/dHQ6Rw5DCus9geXMa45ua1x5S0ErQuHYSDunmdqekHdPM7UFXZqEOzKhQJQoQglYNM6Ys9ipGtaaopsyBMlzjnDWjFx4gty5D9OB/wD02EHECjVIEmJL2Yxw8aD0VH6V9HOfdc2vTbMa19MFnLDXF0fovY0rQyqxtSm8PY8XmPYQ5rhwghfmKrABJMjDDAA5zjM8G9vnKMevfQlVLtG1MSQ21vABJIG1YTHBmpH3+7X8NT8pb7qqvGL2fdr+Gp+Ut91VXjFpw9WfL2CEIVqsIQhAIQhAIQhAKIUoQQAocMDyKyh2R5EHYNGblT5jOo1all0ZuVPmM6jVqWFsCQd08ztT0k9/5nagW7MqFLsyoUJCEIQC439Oz4tFj/0VOu1dkXE/p/MWmwzkaFUYc9qlDl1qtTiLt4kDITgu2/QSf/GVfLH9SmuHOo75IjDAB0wZxkiN7h3xnjHb/oH/APW1vK39Rg7EHpu7T8Mzypvuqq8avZd2n4ZnlTfdVV41acPVny9ghCFaraqej6jqTqwAFNgkkvbeO2DcG5nEjHJLsllfVdcYJMFxJIa1rRiXOJwAHCtejB9zbf8AQz3tNGhBedVpnBlWi5lSptQKLZa7WOLiBdBaJE4zwwuZ5THBVXRzgxz2VKdZrIv6l5cWSYBIIBid8YLI1pJAAJJIAAxJJwAHGvr2eg2lStD6dVtdxpOoubSDhq2PIDqjg8AkCBkCATiQvm07QWGm6mLj6Zm+DJcZkGDgIySlStGv6nfNwVKTqow1Das1ZGbRhdLuIFZbJZXVSQ2AGtL3vebjKbRmXE5ZrdoWytdUp1DVaXtcKjaDSRWqOa6WsBcAySR4Rz4VVrybNa3kXXVLRSvjKMary3p/ZRKYZrTYXMbrA9lWneuF9JxcGuiQ1wIBBI4llX0NG40bYDlqabv1bWZB9p6V89dURUKHZHkUqrsjyKUOw6M3KnzGdRq1LLozcmcxnUatSwtgSHbp5nanrOd1PMy/VBV2ZUKXZlQoAhCEAvK/SB3FUtL0Wtc/VVqMmjVGIE5tcN8YBeqXze6HSGxrNVrYxTY97i0Aua1jHPcWg4XoaY4yEHGqP0MaQc4Mq2igykDjUYHF5HIut9zugaOjrMyy0BtWYuce+qOObjx4excY7nfpWtdW20adSm1tKtWbSBpGqazL7rrSXOcRUgkSHCDjlvd3pVS9jXEQXNBI4DvhSPP92f4ZnlTfdVV41ey7s/wzPKm+6qrxsLRh6qMvIQphEK1W2WGu1tK0tcYNSk1rBjtiKjHEdAKnRtZgFalUcWNrsDdYAXXHNcHtkDEtMQYxWOFosmq2wqh2MXSzEtznfA4OFRWiWmzinZ9Y81mVXupPpU2UdYR940tLnlzQAADMZlZLNaQHUtaDVpUjuZOF1xlwHTPKtR2JBgVZ4yzgMY70mN45KlMWa9UDjULbx1bhE3WgxPG4xvYQOElQL0rNRZUbUNqYaTXB8NbV2QQDIbcLYDsIm9G+pp2xlQ2ltU6sWl+ua6C5tJ4e5wDgMbpD3CQOAwludZ9rdY6A196/JJJu6s7Vwyg9McYy2i6XuuCGTtQZmP1J/dBsLmUaNVgqNq1K91p1d8spsa6+ds4CXEgYAYAFfOQhdURVCq/I8isqvyPIpQ7FozcmcxnUatSx6LP3beYzqNWxYWwLOd18ztWhZ4+8PM7UFHZqFLsyoUJCEIQCVaaAqMLHZHiBj9DgeQ54pqEHgtF/RTo+zWhlqpNIqU3h7JeXspuGTmMdkRmC4ugwRiAvauaAAAIAEAcAC0FIqIPOd2X4ZnlTfdVV4+F7Hux/DM8qb7qqvILTi6s+XlWFMKVKtVqwiFZEIKwiFZCCkIhWUFBVQrFVKCFR+R5FYqr8jyIh2DRW5t5jOo1bFk0WPumcbGdRq1rE2BJO6eZ2pySd08ztQKdmVCl2ZUIBCEIBCEIApFROKTUQed7svw1Pypvuqq8eF6/uy/DU/Km+6qryAWjF1UZOVghAClWqwhEKYQVQphEIKqCrEKCEFSqlXIUEIKFUfkeRMhUeMDyIOw6M3KnzGdRq1LLozcqfMZ1GrUsTWEk7p5nanJJ3TzO1Ap+ZVVZ2ZVUAhCEAhCEAUionlIqIPPd2P4an5U33VVeSa1eu7rvw9Pylvuqq8Xb2ujamIB4cT+nFK0YuqjL2ZzpIB0f4Y7fIYZwd/P5rLaNJy8Ui0bcAiX3d/HbSLkDbTwiN+RZlJsQ3IYtaIAxkwcY3/bxKj6LA4nC/OrOF6f8AKWjCMuDGN7fsVmWTSIa4sJLmta0naEOZIccGtbLhgMhv8Mq1ptd6o1oe5tN0APZdaQcDMP4nRibpJzwISLPYBBvObeG2ZekhsTImZ4Mfmq0NHte0l74IkQSJjECSN6d6eFBqr62mHtJqtMQDUfSqBsG6bpYZcbwcBlN0iBvYmaUe66DtXAQQC6+ScAbpIBOIwE8KvUpBrQ0ODrgDWkyRGBje7eLPBL6AaG1JFR5lrvCF4bxPFInDNB9WhpNhvNJN5phrSDeIMXS4gRiZx7VR9qILXSYmMBLCDOXHkP0O/nhfZGnJwmMSMXNPBmM+EY9OFm2a8JG2768XZy0TM453bscQxQfRslubVgBpBxzjeMdi1lqyWGzAics8c5IjGN7NfRuIM5aqPbgeRario9mB5EQ6tozcqfMZ1GrUsujNyp8xnUatSxtgSTunmdqckndPM7UCnZlVUvzKhAIQhAIQhAFIqJxSKhQfH7oWtNKkHZbJGX+qqviGz0DgWz6S+13RbjT8pHuqq+BUcQr8fCjJysbBZTINMEHEjb44RjjioGjbJh903DAYOwSjVdjio1z+Hf4M1Yrlo2DZpxptPAHNwHJgriyWbxbMMe9O9HwCzMrOIJnAKadocROGChMtOx7Plq2457TPEH9wOhTsaz+A3HOWnfEH2LK60uE5Yb6h1qeADgZQlrNjs8k3GyRBMOxGOHtKg6OspEGmIJmNvnETnhgVlNqcM+BGyXb54f2wQlsZYbMDIaARgCLwwVjZaHCRyE9qy03uOM/3BMxQld1jpbzyOXFJqWFkH70ZeCVYhVe3A8iH8dB0ZuVPmM6jVqWXRm5U+YzqNWpZWoJB3TzO1PSHbp5nagU/M8qhS/MqEAhCEAhCEEFIqJ5SKqD5OnRNKl5SPdVV8g0ZzX2tLiadLyge6qrFq1bZXwpv5fI1BmOXFLNE3wN67jlhJ4s19zVqDRldy4h8anZTMDLDtz4EGx7YNy4SMuXpX2WUQMgqvszXZj2p+iHy6lmEYd60Rjv/ANCSyiZ4uDlX2hZgBAy6VJoDg9gSSHyDYnGScpiMZwj5oNliAP3X2dWOnFQKImUkh8uzUThPBP8AfYtWqWy4i4olMMerVX08DyLdcVX08DyJJD1ejNyp8xnUatSy6M3KnzGdRq1KhoCQd08ztT0h26eZ2oFPzKhD8yoQShQhBKFCEAUionFIqoPn6T7yl5R/xqrKtWk+8peUf8qqySu7eFV/KyFWVMrpymEQolEoJQolEoJRCiUSglCiVEoLKr8jyIlQ44HkQeo0ZuVPmM6jVqWXRm5U+YzqNWpVLwkO3TzO1PSHbp5nagS7MqFLsyoQCEIQCFntL3AtDTEte4mL3egQPasrrW9oEuG2bTcXXWi7fa8kYmM2jPhQfRKRUWc2vCS8Btxzi4BrsQ5oAF0kHOP1SW2vvS+oy669JBbDYu3WlwMTiT/8lBTSp+7peUf8qqxXk+31b1Gm6ZGyyARkQKdYD2BY7yst4VX8m3kXkq8i8uocG3kXkqUSkBt5F5KlEpAbeReSryJSAy8i8l3kSkBl5Q92B5FSVD3YHkSB7DRm5U+YzqNWpZdGblT5jOo1alS0BIdunmdqes7908ztQKdmoQUIBCEIIkcKgu/sqYH9CIH9CCpcf6Ul7v7KeQOD2JFQDg9iD5mmj91S8oHuaq+ZK+lpzcqXlI91VXybyts4UZK+TJRKXeReXauTJRKXeRKEmSiUu8i8hJkolLvIvISZKJS5ReQkyVDjgeRRTaXGGiTn81FZpbIcIMf0oPbaM3KnzGdRq1LLozcqfMZ1GrUs7WFnqd/5natCyV3RUA4aZj9CJ/cIFlCChAIQhAIQhBBSKieUiog+R3RVGto03OcGgWkSXEAD7qrvlfA2fR8dT9Yz4r3mj42w4wcVuFNvgjoC7tvhXdZ+qy5rs+j46n6xnxRs+j46n6xnxXStW3wR0BTq2+COgKdnxGqntzXZ9Hx1P1jPio2fR8dT9Yz4rpWrb4I6AjVt8EdATZ8NVPbm31hR8dT9Yz4qPrCj46n6xnxXRq7QIAABeboMDDAknoBWWpYLgL6b3F7cSHuvsqRvFpwbytiOMYFsNVPbwf1hR8dT9Yz4o+sKPjqfrGfFdJYxpAN0YicgratvgjoCbDVT25p9YUfHU/WM+KNn0fHU/WM+K6Vq2+COgI1bfBHQE2fDVT25zR0rSYSRWpGRdM1GRHSotOlaT8TWpCG3RFRuQnj410fVt8EdAUOpt8EdATZ8NX0nRm5M5jOo1alSlv8AOV1WtCy26gXBrmd+wy0HAOGRaTx/uAtSEHzaddjjE3X77H7V4/TtyTbi1VKTXCHNDhwOAI9qVsCj4pnoNQKuI1absGj4pnoNRsGj4pnoNQK1aNWm7Bo+KZ6DVIsVLPVtnhuhAgsSarFv2NT8BvQEvYFHxTPQagwUXFjp3jgV9GnWB31T6toeJp+g34KW2CiMRSYDxMaEDr4RfUCi3wR0BTqm+COgIC+i+jVN8EdARqm+COgIFWhgeIm6QbzXDNpGR+SrTLzhULCIg3Q7bfocvan6pvgjoCNU3wR0BAXwi+jVN8EdARqm+COgIC+i+jVN8EdARqm+COgIINQKhfOATNU3wR0BWAQQxsCFZCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEH/9k=')",
        }}
        className="h-96 w-72 border-2 border-red-500 bg-no-repeat bg-fit"
      ></div>
    </>
  );
};

export default CardZoom;
